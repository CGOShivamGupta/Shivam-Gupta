let score = 0;

function incrementCoin() {
    score++;
    document.getElementById('coinButton').textContent = score;
    document.getElementById('scoreDisplay').textContent = "Gamer's Coin: " + score;
}
