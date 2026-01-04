let nameError = document.querySelector("#name-error");
let phoneNumError = document.querySelector("#phone-Number-error");
let emailError = document.querySelector("#email-error");
let msgError = document.querySelector("#Message-error");
let subError = document.querySelector("#submit-error");

function validateName() {
  var nm = document.querySelector("#contact-name").value;
  if (nm.length == 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  }

  if (!nm.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name!";
    return false;
  }

  nameError.innerHTML = `<img src="./check-mark.png", width="20px">`;
  return true;
}

function validatePhone() {
  var phone = document.querySelector("#contact-phone").value;
  if (phone.length == 0) {
    phoneNumError.innerHTML = "Number is required!";
    return false;
  }
  if (!phone.match(/^[0-9]+$/)) {
    phoneNumError.innerHTML = "Only digits allowed!";
    return false;
  }
  if (phone.length !== 10) {
    phoneNumError.innerHTML = "10 digits required!";
    return false;
  }

  phoneNumError.innerHTML = `<img src="./check-mark.png", width="20px">`;
  return true;
}

function validateEmail() {
  var email = document.querySelector("#contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }
  if (!email.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/)) {
    emailError.innerHTML = "Please provide the correct email!";
    console.log("Email is checked!");

    return false;
  }
  emailError.innerHTML = `<img src="./check-mark.png", width="20px">`;
  return true;
}

function validateMessage() {
  var msg = document.querySelector("#contact-message").value;
  if (msg.length == 0) {
    msgError.innerHTML = "Message is required!";
    return false;
  }
  if (msg.length !== 10) {
    msgError.innerHTML = "Minimum 10 character required!";
    return false;
  }
  msgError.innerHTML = `<img src="./check-mark.png", width="20px">`;
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    subError.style.display = "block";
    subError.innerHTML = "Please fix the error first";
    setTimeout(function () {
      subError.style.display = "none";
    }, 3000);
    return false;
  }
  subError.innerHTML = "Your data is submited successfully!";
  return true;
}
