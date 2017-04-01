var firstId = document.getElementById('first');
var greenID = document.getElementById("Second");

firstId.innerHTML = "robert hitt"; 

firstId.addEventListener('click', clickMe);

function clickMe(event) {
  console.log("clicked");
  firstId.innerHTML = 'Goodbye';
}
