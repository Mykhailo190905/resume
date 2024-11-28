document.addEventListener("DOMContentLoaded", () => {
    console.log("Резюме загружено. Добро пожаловать!");
});

document.getElementById('show-goal').addEventListener('click', function() {
    const goalSection = document.getElementById('goal-section');
    const isVisible = goalSection.style.display === 'block';
    
    goalSection.style.display = isVisible ? 'none' : 'block';
    this.textContent = isVisible ? 'Show Goal' : 'Hide Goal';
});
