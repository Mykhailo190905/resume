document.addEventListener("DOMContentLoaded", () => {
    console.log("Резюме загружено. Добро пожаловать!");
});

document.getElementById('show-goal').addEventListener('click', function() {
    const goalSection = document.getElementById('goal-section');
    if (goalSection.style.display === 'none' || goalSection.style.display === '') {
        goalSection.style.display = 'block'; 
        this.textContent = 'Hide Goal'; 
    } else {
        goalSection.style.display = 'none'; 
        this.textContent = 'Show Goal'; 
    }
});