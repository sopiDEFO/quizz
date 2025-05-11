const player = document.querySelector('.player');
const enemy = document.querySelector('.enemy');
const scoreElement = document.getElementById('score');
const gameOverMessage = document.getElementById('game-over-message');
const finalScore = document.getElementById('final-score');
const startScreen = document.getElementById('start-screen');
const car = document.querySelector('.car');
const tree = document.querySelector('.tree');
const house = document.querySelector('.house');


let carX = window.innerWidth + 100;
let treeX = window.innerWidth + 300;
let houseX = window.innerWidth + 600;


// Musique de fond
const backgroundMusic = new Audio('background.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

let playerPosition = 10;
let playerVelocity = 0;
let isJumping = false;
let gravity = 0.8;
let jumpPower = 10;

let enemyPosition = window.innerWidth;
let enemySpeed = 5;
let score = 0;
let level = 1;
let playerLives = 3;

let animationId;
let gameStarted = false;


// Saut
function jump() {
  if (!isJumping && gameStarted && gameOverMessage.style.display === 'none') {
    isJumping = true;
    playerVelocity = jumpPower;
  }
}

// Clavier et tactile
document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'ArrowUp') jump();
});
document.addEventListener('touchstart', () => jump());

// Collision
function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();

  return (
    playerRect.left < enemyRect.right &&
    playerRect.right > enemyRect.left &&
    playerRect.top < enemyRect.bottom &&
    playerRect.bottom > enemyRect.top
  );
}

// Boucle du jeu
function gameLoop() {
  animationId = requestAnimationFrame(gameLoop);

  if (isJumping) {
    playerVelocity -= gravity;
    playerPosition += playerVelocity;

    if (playerPosition <= 10) {
      playerPosition = 10;
      isJumping = false;
    }
  }

  enemyPosition -= enemySpeed;
  carX -= 3;
treeX -= 2;
houseX -= 1.5;

if (carX < -100) carX = window.innerWidth + Math.random() * 300;
if (treeX < -100) treeX = window.innerWidth + Math.random() * 500;
if (houseX < -150) houseX = window.innerWidth + Math.random() * 800;

car.style.left = carX + 'px';
tree.style.left = treeX + 'px';
house.style.left = houseX + 'px';

  if (enemyPosition <= -100) {
    enemyPosition = window.innerWidth;
  }

  if (checkCollision()) {
    playerLives--;
    score -= 10;

    if (playerLives <= 0) {
      endGame();
      return;
    }

    enemyPosition = window.innerWidth;
  }

  score++;
if (score % 100 === 0) {
  level++;
  if (enemySpeed < 12) {
    enemySpeed += 1;
  }
}

  player.style.bottom = `${playerPosition}vh`;
  enemy.style.left = `${enemyPosition}px`;
  scoreElement.textContent = `Score: ${score} | Vies: ${playerLives}`;
}

// Démarrage du jeu (via bouton)
function startGame() {
  startScreen.style.display = 'none';
  gameOverMessage.style.display = 'none';
  score = 0;
  level = 1;
  enemySpeed = 5;
  playerLives = 3;
  playerPosition = 10;
  playerVelocity = 0;
  isJumping = false;
  enemyPosition = window.innerWidth;
  gameStarted = true;

  backgroundMusic.play().catch(() => {
    alert("Cliquez à nouveau pour lancer le son.");
  });

  animationId = requestAnimationFrame(gameLoop);
}

// Fin du jeu
function endGame() {
  cancelAnimationFrame(animationId);
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  gameOverMessage.style.display = 'flex';
  finalScore.textContent = `Score final : ${score}`;
  gameStarted = false;
}
function resetGame() {
  gameOverMessage.style.display = 'none';
  score = 0;
  level = 1;
  enemySpeed = 5;
  playerLives = 3;
  playerPosition = 10;
  playerVelocity = 0;
  isJumping = false;
  enemyPosition = window.innerWidth;
  backgroundMusic.currentTime = 0;
  backgroundMusic.play().catch(() => {
    alert("Cliquez pour relancer la musique");
  });
  gameStarted = true;
  animationId = requestAnimationFrame(gameLoop);
}










