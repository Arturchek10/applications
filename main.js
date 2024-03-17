const inputEdit = document.getElementById('edit-home');
const selectContainer = document.getElementById('select-container');

//выводим текст выбранного option
selectContainer.addEventListener('change', function () {
  let index = selectContainer.selectedIndex;
  console.log(index);
  let allOptions = selectContainer.options;
  let optionText = allOptions[index].textContent
  console.log(optionText);
  inputEdit.value = optionText;
  inputEdit.style.borderColor = 'black';
})

//сохраняем измененный текст в option
function addText() {
  if (inputEdit.value.trim()){
    let index = selectContainer.selectedIndex;
    let allOptions = selectContainer.options; 
    allOptions[index].textContent = inputEdit.value;
    inputEdit.style.borderColor = 'black';
  } else{
    inputEdit.style.borderColor = 'red';
  }
}


