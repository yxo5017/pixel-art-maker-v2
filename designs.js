// When size is submitted by the user, call makeGrid()
const submitBtn = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');
const pixelColor = document.querySelector('#colorPicker').value;

makeGrid();

function makeGrid(event){
  submitBtn.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    for (let i = 1; i <= width; i++) {
      const pixelTd = document.createElement('tr');
      canvas.appendChild(pixelTd);
      for (let j = 1; j <= height; j++) {
        const pixelTr = document.createElement('td');
        pixelTd.appendChild(pixelTr);
      }
    }
    change_pixel_color();
  },
  false)
};

function change_pixel_color() {
  $("#pixelCanvas").on("click", "td", function() {
    $("td").click(function(){
      const pixelColor = document.querySelector('#colorPicker').value;
      $(this).css("background-color", pixelColor);
    });
  })
};
