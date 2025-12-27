const inputBox = document.getElementById("input-box"); // take input box
const listContainer = document.getElementById("list-container"); // take ul list
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must give some task.");
  } else {
    let listItem = document.createElement("li"); // create list
    listItem.innerHTML = inputBox.value; // put value in list
    listContainer.appendChild(listItem); //add li in ul list-container

    //add edit button
    let editspn = document.createElement("span");
    console.log("edit");
    editspn.innerText = "E";
    editspn.classList.add("edit");
    listItem.appendChild(editspn);
    console.log("edit button added");

    //add delete button
    let delspan = document.createElement("span");
    delspan.innerHTML = "\u00d7";
    listItem.appendChild(delspan);
    console.log("delete button added");
    // listContainer.appendChild(it);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    console.log("eventlistener working.");
    console.log(e.target.tagName);

    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (
      e.target.tagName === "SPAN" &&
      !e.target.classList.contains("edit")
    ) {
      console.log(e.target.parentElement);
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
  let newTaskNode = listItem.firstChild;
  //update the text and save
  let newText = prompt("Edit your task:", newTaskNode.textContent);
  if (newText !== null && newText.trim() !== "") {
    newTaskNode.textContent = newText.trim();
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
