// Select the necessary elements
const coinButton = document.getElementById('coin-button');
const totalCoinsDisplay = document.getElementById('total-coins');
const todayCoinsDisplay = document.getElementById('today-coins');

// Load coin data from localStorage
let totalCoins = parseInt(localStorage.getItem('totalCoins')) || 0;
let todayCoins = parseInt(localStorage.getItem('todayCoins')) || 0;
let lastPlayedDate = localStorage.getItem('lastPlayedDate');

// Check if it's a new day
const today = new Date().toLocaleDateString();
if (lastPlayedDate !== today) {
    todayCoins = 0; // Reset today's coins
    localStorage.setItem('lastPlayedDate', today);
}

// Update the displays
totalCoinsDisplay.textContent = totalCoins;
todayCoinsDisplay.textContent = todayCoins;

// Event listener for the button
coinButton.addEventListener('click', () => {
    totalCoins++;
    todayCoins++;
    
    // Update the displays
    totalCoinsDisplay.textContent = totalCoins;
    todayCoinsDisplay.textContent = todayCoins;
    
    // Store the new values in localStorage
    localStorage.setItem('totalCoins', totalCoins);
    localStorage.setItem('todayCoins', todayCoins);
});