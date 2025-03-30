const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const instructions = document.getElementById('instructions');

let score = 0;
let gameRunning = false;
let ship = {
    radius: 10,
    orbit: 150,
    angle: 0,
    speed: 0.05,
    boost: 0
};
let planet = { x: canvas.width / 2, y: canvas.height / 2, radius: 50 };
let asteroids = [];
let orbs = [];

function startGame() {
    gameRunning = true;
    score = 0; // Reset score on start
    ship.orbit = 150;
    ship.angle = 0;
    ship.boost = 0;
    asteroids = [];
    orbs = [];
    scoreDisplay.textContent = `Score: ${score}`; // Initial score display
    startBtn.style.display = 'none';
    instructions.style.display = 'none';
    spawnAsteroids();
    spawnOrbs();
    gameLoop();
}

startBtn.addEventListener('click', startGame);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameRunning) {
        ship.boost = 5;
    }
});

function spawnAsteroids() {
    if (gameRunning && Math.random() < 0.03) {
        asteroids.push({
            x: Math.random() * canvas.width,
            y: -20,
            radius: 15 + Math.random() * 10,
            speed: 1 + Math.random() * 2
        });
    }
}

function spawnOrbs() {
    if (gameRunning && Math.random() < 0.02) {
        orbs.push({
            x: Math.random() * canvas.width,
            y: -10,
            radius: 8
        });
    }
}

function gameLoop() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw planet
    ctx.fillStyle = '#4a4ae9';
    ctx.beginPath();
    ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
    ctx.fill();

    // Update and draw ship
    ship.angle += ship.speed;
    ship.orbit -= 0.2; // Orbit decay
    if (ship.boost > 0) {
        ship.orbit += ship.boost;
        ship.boost -= 0.5;
    }
    const shipX = planet.x + Math.cos(ship.angle) * ship.orbit;
    const shipY = planet.y + Math.sin(ship.angle) * ship.orbit;
    ctx.fillStyle = '#e9e94a';
    ctx.beginPath();
    ctx.arc(shipX, shipY, ship.radius, 0, Math.PI * 2);
    ctx.fill();

    // Check collision with planet
    if (ship.orbit <= planet.radius + ship.radius) {
        endGame();
        return;
    }

    // Update and draw asteroids
    for (let i = asteroids.length - 1; i >= 0; i--) {
        const asteroid = asteroids[i];
        asteroid.y += asteroid.speed;
        ctx.fillStyle = '#8c8c8c';
        ctx.beginPath();
        ctx.arc(asteroid.x, asteroid.y, asteroid.radius, 0, Math.PI * 2);
        ctx.fill();

        if (Math.hypot(shipX - asteroid.x, shipY - asteroid.y) < ship.radius + asteroid.radius) {
            endGame();
            return;
        }
        if (asteroid.y > canvas.height + asteroid.radius) {
            asteroids.splice(i, 1);
        }
    }

    // Update and draw orbs
    for (let i = orbs.length - 1; i >= 0; i--) {
        const orb = orbs[i];
        orb.y += 2;
        ctx.fillStyle = '#4ae94a';
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();

        if (Math.hypot(shipX - orb.x, shipY - orb.y) < ship.radius + orb.radius) {
            score += 10; // Increment score
            scoreDisplay.textContent = `Score: ${score}`; // Update display immediately
            orbs.splice(i, 1); // Remove collected orb
        } else if (orb.y > canvas.height + orb.radius) {
            orbs.splice(i, 1); // Remove orb that goes off-screen
        }
    }

    spawnAsteroids();
    spawnOrbs();
    requestAnimationFrame(gameLoop);
}

function endGame() {
    gameRunning = false;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Game Over! Score: ${score}`, canvas.width / 2, canvas.height / 2);
    startBtn.style.display = 'block';
    startBtn.textContent = 'Restart Game';
}