const win = 1
const lose = 2
const tie = 0

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(max=3, min=1) {
    let choice = Math.floor(Math.random() * (max - min + 1) + min)
    switch(choice) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
        default:
            alert('No such value')
    }
}

function handleClick(button) {
    button.classList.add("clicked");
    
    setTimeout(() => {
        button.classList.remove("clicked");
    }, 100);
}

function play(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    const newElement = document.createElement('div');
    newElement.classList.add('actions');
    newElement.textContent = `Your opponent chose ${computerChoice}.`;
    const actions = document.querySelector('.actions');
    actions.replaceWith(newElement);

    if (playerChoice === computerChoice) {
        return tie
    } else if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) 
    {
        return win
    } else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
            (playerChoice == 'paper' && computerChoice == 'scissors') ||
            (playerChoice == 'scissors' && computerChoice == 'rock')) 
    {
        return lose
    }
}

function endGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    })
    const scoreDiv = document.getElementById('score');
    if (playerScore === 5) {
        scoreDiv.textContent = `You Win!`;
    } else if (computerScore === 5) {
        scoreDiv.textContent = `You Lose.`;
    }
    
    const restartButton = document.createElement('button');
    restartButton.id = 'restartButton';
    restartButton.textContent = 'Play Again';
    restartButton.style.alignSelf = 'center';
    scoreDiv.insertAdjacentElement('afterend', restartButton);
    restartButton.addEventListener('click', restartGame);
}

function restartGame() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = false;
    })
    playerScore = 0;
    computerScore = 0;
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Your Score: ${playerScore} | Opponent's Score: ${computerScore}`;
    const restartButton = document.getElementById('restartButton');
    restartButton.remove();
}

function game(playerChoice) {
    let result = play(playerChoice, getComputerChoice());
    if (result == win) {
        playerScore += 1;
    } else if (result == lose) {
        computerScore += 1;
    }
    if (playerScore === 5 || computerScore === 5) {
        endGame()
    } else {
        const scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your Score: ${playerScore} | Opponent's Score: ${computerScore}`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        handleClick(button);
        game(button.id);
    });
})