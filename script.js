let gameState = { score: 0, lives: 3, combo: 0, currentQ: 0 };
let config = {}; // Сюда придут настройки из Genially

// Инициализация игры
function initGame(data) {
    config = data;
    gameState.lives = config.startLives || 3;
    renderQuestion();
}

function renderQuestion() {
    const q = config.questions[gameState.currentQ];
    const container = document.getElementById('game-container');
    
    // Очистка и отрисовка вопроса и платформ
    // Здесь мы будем использовать KaTeX для формул:
    // katex.render(q.text, questionElement);
}

function handleAnswer(isCorrect, element) {
    const player = document.getElementById('player');
    // Логика прыжка, как мы обсуждали ранее
    if (!isCorrect) {
        player.classList.add('falling');
        gameState.lives--;
        gameState.combo = 0;
        setTimeout(resetTurn, 1000);
    } else {
        gameState.score += (10 + (gameState.combo * 5));
        gameState.combo++;
        gameState.currentQ++;
        // Переход к следующему...
    }
}
