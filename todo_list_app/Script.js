const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
  if (inputBox.value.trim() === '') {
    alert('You must give some task.');
  } else {
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
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (
      e.target.tagName === 'SPAN' &&
      !e.target.classList.contains('edit')
    ) {
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
  let newTesKNode = listItem.firstChild;
  //update the text and save
  let newText = prompt('Edit your task:', newTesKNode.textContent);
  if (newText !== null && newText.trim() !== '') {
    newTesKNode.textContent = newText.trim();
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
