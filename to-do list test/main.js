const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value.trim()) {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    li.addEventListener('click', function () {
      li.style.textDecoration = 'line-through'
      li.addEventListener('dblclick', function () {
        li.remove();
      })
    })
    inputBox.style.borderColor = 'black';
  } else {
    inputBox.style.borderColor = 'red';
  }
  inputBox.value = '';
}

function removeAll() {
  while(listContainer.lastElementChild){
    listContainer.removeChild(listContainer.lastElementChild)
  }
}