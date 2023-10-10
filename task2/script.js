// document.querySelector('#consoleLog').onclick = function() {
//     alert('Метод для вывода сообщения в веб-консоль');
// };
// document.querySelector('#alert').onclick = function () {
//     alert('Метод показывает диалоговое окно с сообщением и кнопкой ОК');
// };
// document.querySelector('#prompt').onclick = function () {
//     alert('Метод отображает диалоговое окно с запросом на ввод текста, вторым аргументом можно указать значение по уполчанию для поля ввода.');
// };
const consoleLog = document.querySelector('#consoleLog');
const mAlert = document.querySelector('#alert');
const mPromt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
});

mAlert.addEventListener('click', () => {
    alert('Метод показывает диалоговое окно с сообщением и кнопкой ОК');
});

mPromt.addEventListener('click', () => {
    alert('Метод отображает диалоговое окно с запросом на ввод текста, вторым аргументом можно указать значение по уполчанию для поля ввода.');
});