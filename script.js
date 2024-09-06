// Initialize the coin variables
let totalCoins = parseInt(localStorage.getItem("totalCoins")) || 0;
let todayCoins = 0; // Reset daily coins each time page is loaded

// Update the coin display on page load
document.getElementById("totalCoins").innerText = totalCoins;
document.getElementById("todayCoins").innerText = todayCoins;

// Coin increment function
document.getElementById("coinButton").addEventListener("click", () => {
    // Increase coins
    totalCoins += 1;
    todayCoins += 1;

    // Update the display
    document.getElementById("totalCoins").innerText = totalCoins;
    document.getElementById("todayCoins").innerText = todayCoins;

    // Save total coins to localStorage
    localStorage.setItem("totalCoins", totalCoins);

    // Display the +1 animation
    const plusOne = document.getElementById("plusOne");
    plusOne.classList.add("active");
    setTimeout(() => {
        plusOne.classList.remove("active");
    }, 800);
});