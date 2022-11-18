var dateDisplay = $('#currentDay');
var label = document.getElementsByClassName('form-inline');
var textBox = document.getElementsByClassName('form-control');
var index = 0;
var rows = document.getElementsByClassName('form-control')

dateDisplay.text(moment().format("MMMM Do YYYY"))

var hour = moment().format("HH");
console.log(hour)



function changeColor() {
  var ids = Array();
  for( i=9; i<18; i++ ) {
    ids.push(i)
  };
  ids.forEach(id => {
    console.log(id)
    if (id>hour) {
      document.getElementById(id).classList.add("future")
    } else if (id == hour) {
      document.getElementById(id).classList.add("present")
    } else {
      document.getElementById(id).classList.add("past")
    }
  })
}


window.addEventListener("load", (event) => {
  changeColor()
});

function saveText() {
  localStorage.setItem()
}