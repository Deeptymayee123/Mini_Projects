let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
// let btn = document.getElementById("btn");

function generateQR() {
  let apiUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
  qrImage.src = apiUrl;
  imgBox.classList.add("show-img");
  console.log(`${apiUrl}`);
  console.log(qrText.value);

  console.log("button click");
}
//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
