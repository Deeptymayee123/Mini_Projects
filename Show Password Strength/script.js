var pswd = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pswd.addEventListener("input", () => {
  if (pswd.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pswd.value.length < 4) {
    str.innerHTML = "weak";
  } else if (pswd.value.length >= 4 && pswd.value.length < 8) {
    str.innerHTML = "medium";
    pswd.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (pswd.value.length >= 8) {
    str.innerHTML = "strong";
    pswd.style.borderColor = "Red";
    msg.style.color = "Red";
  }
});
