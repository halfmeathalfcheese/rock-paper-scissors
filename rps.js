const win = 1
const lose = 2
const tie = 0

function getComputerChoice(max=3, min=1) {
    let choice = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(choice)
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

function play(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    if (playerChoice === computerChoice) {
        console.log('Tie!')
        return tie
    } else if ((playerChoice == 'rock' && computerChoice == 'scissors') || 
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice == 'rock')) 
    {
        console.log('You Win')
        return win
    } else if ((playerChoice == 'rock' && computerChoice == 'paper') ||
            (playerChoice == 'paper' && computerChoice == 'scissors') ||
            (playerChoice == 'scissors' && computerChoice == 'rock')) 
    {
        console.log('You lose')
        return lose
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Enter your move:')
        let result = play(playerChoice, getComputerChoice())
        if (result == win) {
            playerScore += 1
        } else if (result == lose) {
            computerScore += 1
        }
    }
    if (playerScore > computerScore) {
        console.log('You Win! ' + playerScore + ' to ' + computerScore)
    } else if (playerScore == computerScore) {
        console.log('It was a tie!')
    } else {
        console.log('You Lose. ' + playerScore + ' to ' + computerScore)
    }
}