const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height === 0 || isNaN(height)) {
    result.textContent = "Please, enter a valid number.";
  } else if (weight === "" || weight === 0 || isNaN(weight)) {
    result.textContent = "Please, enter a valid number.";
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    //show bmi
    result.innerHTML = "your bmi is ${bmi}";
  }
});
