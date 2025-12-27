let popup = document.querySelector("popup");
let btn = document.querySelector(".btn");
let closePopup = document.querySelector("#closePopup");

btn.addEventListener("click", function open() {
  popup.classList.add("open-popup");
});
closePopup.addEventListener("click", function close() {
  popup.classList.remove("open-popup");
});
