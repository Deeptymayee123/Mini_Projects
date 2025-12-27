<<<<<<< HEAD
const inputBox = document.getElementById("input-box"); // take input box
const listContainer = document.getElementById("list-container"); // take ul list
=======
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
>>>>>>> a8c5d2e284da4e26c257d517af0009c7fa108e68
function addTask() {
  if (inputBox.value.trim() === '') {
    alert('You must give some task.');
  } else {
<<<<<<< HEAD
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
=======
    let listItem = document.createElement('li'); // create list
    listItem.innerHTML = inputBox.value; // put value in list
    listContainer.appendChild(listItem); //add li in ul list-container
    console.log('todo value added');

    //add edit button
    let editspn = document.createElement('span');
    editspn.innerText = '✏️';
    editspn.classList.add('edit');
    listItem.appendChild(editspn);
    console.log('edit button added');

    //add delete button
    let deletespan = document.createElement('span');
    deletespan.innerHTML = '❌';
    listItem.appendChild(deletespan);
    console.log('delete button added');
>>>>>>> a8c5d2e284da4e26c257d517af0009c7fa108e68
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
<<<<<<< HEAD
    console.log("eventlistener working.");
    console.log(e.target.tagName);

    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
=======
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
>>>>>>> a8c5d2e284da4e26c257d517af0009c7fa108e68
      saveData();
    } else if (
      e.target.tagName === 'SPAN' &&
      !e.target.classList.contains('edit')
    ) {
      console.log(e.target.parentElement);
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains('edit')) {
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
<<<<<<< HEAD
  let newText = prompt("Edit your task:", newTaskNode.textContent);
  if (newText !== null && newText.trim() !== "") {
    newTaskNode.textContent = newText.trim();
=======
  let newText = prompt('Edit your task:', newTesKNode.textContent);
  if (newText !== null && newText.trim() !== '') {
    newTesKNode.textContent = newText.trim();
>>>>>>> a8c5d2e284da4e26c257d517af0009c7fa108e68
    saveData(); //assume this saves the updated list to localstorage.
  }
}

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showtask() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showtask();
