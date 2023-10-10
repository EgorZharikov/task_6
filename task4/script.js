let elemLink = document.querySelector('#link');
elemLink.addEventListener('click', (e) => {
    e.preventDefault();
    let promtText = prompt('Введите текст');
    elemLink.textContent = promtText;
});