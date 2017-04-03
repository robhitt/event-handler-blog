var mainId = document.getElementById('main');

var firstId = document.getElementById('button-click');
firstId.addEventListener('click', clickMe);

function clickMe(event) {
  mainId.innerHTML = 'You Clicked Me!';
}

var secondId = document.getElementById("mouse-over-handler");
secondId.addEventListener('mouseover', mouseOverMe);

function mouseOverMe(event) {
  mainId.innerHTML = 'You Moused Over!';
}

var thirdId = document.getElementById("pop-up-handler");
thirdId.addEventListener('click', popMe);

function popMe(event) {
  mainId.innerHTML = 'Popped It!';
  alert("Nice pop!");
}

var fourthId = document.getElementById("change-me")
fourthId.addEventListener('input', changeMe);

function changeMe(event) {
  console.log(event.target.value)
  mainId.innerHTML = event.target.value
}
