// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Резюме загружено. Добро пожаловать!");
});

document.getElementById('show-goal').addEventListener('click', function() {
    const goalSection = document.getElementById('goal-section');
    if (goalSection.style.display === 'none' || goalSection.style.display === '') {
        goalSection.style.display = 'block'; // Показываем цель
        this.textContent = 'Hide Goal'; // Меняем текст кнопки
    } else {
        goalSection.style.display = 'none'; // Скрываем цель
        this.textContent = 'Show Goal'; // Меняем текст кнопки
    }
});