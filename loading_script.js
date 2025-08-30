document.addEventListener('DOMContentLoaded', () => {
    const glowFill = document.getElementById('glowFill');
    let progress = 0;

    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            window.location.href = 'index.html'; 
        } else {
            progress += Math.floor(Math.random() * 5) + 1;
            if (progress > 100) progress = 100;

            glowFill.style.width = `${progress}%`;
        }
    }, 100);
});