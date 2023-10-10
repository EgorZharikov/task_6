let duplicateField = document.querySelector('#duplicateField');
let elemInput = document.querySelector('#input');
elemInput.addEventListener('keyup', (e) => {
    duplicateField.textContent = elemInput.value;
});
document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(elemInput.value);
    elemInput.value = '';
    duplicateField.textContent = '';
});