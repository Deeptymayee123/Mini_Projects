var decreaseBtn = document.getElementById('btn-decrease');
var resetBtnn = document.getElementById('btn-reset');
var increaseBtn = document.getElementById('btn-increase');

var numberDiv = document.getElementById('number');

// increase function
function increase() {
  numberDiv.innerHTML = Number(numberDiv.innerHTML) + 1;
}

// decrease function
function decrease() {
  numberDiv.innerHTML = Number(numberDiv.innerHTML) - 1;
}

// reset function
function reset() {
  numberDiv.innerHTML = 0;
}

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtnn.addEventListener('click', reset);