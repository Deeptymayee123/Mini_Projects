const passwordBox = document.querySelector("#passward");
const btn = document.getElementById("gen-btn");
//console.log(btn);

const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "012546789";
const symbol = "!@#$%^&*()_+{}[]:',./<>?";

const allChars = upperCase + lowerCase + number + symbol;

// function createPasword() {
//   let password = "";
//   password += upperCase[Math.floor(Math.random() * upperCase.length)];
//   password += upperCase[Math.floor(Math.random() * lowerCase.length)];
//   password += upperCase[Math.floor(Math.random() * number.length)];
//   password += upperCase[Math.floor(Math.random() * symbol.length)];

//   while (length > password.length) {
//     password += allChars[Math.floor(Math.random() * allChars.length)];
//   }

//   let value = document.querySelector(".display");
//   value.innerHTML = password;
// }

btn.addEventListener("click", function createPasword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += upperCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * number.length)];
  password += upperCase[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
});
