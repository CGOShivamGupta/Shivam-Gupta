let totalCoins = localStorage.getItem('totalCoins') ? parseInt(localStorage.getItem('totalCoins')) : 0;
let todayCoins = sessionStorage.getItem('todayCoins') ? parseInt(sessionStorage.getItem('todayCoins')) : 0;

// Verify if these IDs exist in your HTML
document.getElementById('totalCoins').textContent = totalCoins;
document.getElementById('todayCoins').textContent = todayCoins;

const coinButton = document.getElementById('coinButton');
const plusOne = document.getElementById('plusOne');

coinButton.addEventListener('click', () => {
    // Ensure the button click is working
    console.log("Coin button clicked!");

    totalCoins++;
    todayCoins++;
    localStorage.setItem('totalCoins', totalCoins);
    sessionStorage.setItem('todayCoins', todayCoins);

    document.getElementById('totalCoins').textContent = totalCoins;
    document.getElementById('todayCoins').textContent = todayCoins;

    // Ensure the animation is triggered
    console.log("Triggering +1 animation");

    plusOne.style.opacity = 1;
    plusOne.style.top = '-40px';
    setTimeout(() => {
        plusOne.style.opacity = 0;
        plusOne.style.top = '0px';
    }, 500);
});

const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const item = e.target.closest('.item');
        const price = parseInt(item.getAttribute('data-price'));

        if (totalCoins >= price) {
            totalCoins -= price;
            localStorage.setItem('totalCoins', totalCoins);
            document.getElementById('totalCoins').textContent = totalCoins;
            alert('Purchase successful!');
        } else {
            alert('Not enough Gamer\'s Coins 🎮!');
        }
    });
});