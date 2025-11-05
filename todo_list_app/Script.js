const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must give some task.");
  } else {
    let it = document.createElement("li"); // create list
    it.innerHTML = inputBox.value; // put value in list
    listContainer.appendChild(it); //add li in ul list-container

    //add edit button
    let editspn = document.createElement("span");
    console.log("edit");
    editspn.innerText = "E";
    editspn.classList.add("edit");
    it.appendChild(editspn);
    console.log("edit added");

    //add delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    it.appendChild(span);

    // listContainer.appendChild(it);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (
      e.target.tagName === "SPAN" &&
      !e.target.classList.contains("edit")
    ) {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains("edit")) {
      let listItem = e.target.parentElement;
      handleEdit(listItem);
    }
  },
  false
);

function handleEdit(listItem) {
  //get the current text
  let newTesKNode = listItem.firstChild;
  //update the text and save
  let newText = prompt("Edit your task:", newTesKNode.textContent);
  if (newText !== null && newText.trim() !== "") {
    newTesKNode.textContent = newText.trim();
    saveData(); //assume this saves the updated list to localstorage.
  }
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showtask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
