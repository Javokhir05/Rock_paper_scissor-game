window.addEventListener('DOMContentLoaded', ()=>{
    const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    restart = document.querySelector('#restart')
    scoreBoard = {
        player: 0,
        computer: 0,
        draw: 0
    };

//Play game
function play(event) {
    restart.style.display = 'inline-block'
    const playerChoice = event.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner( playerChoice,computerChoice)
    showWinner(winner, computerChoice)
}

//Get Computer Choice

function getComputerChoice() {
    const random = Math.random() 
    if (random < 0.34) {
        return 'rock'
    } else if(random >= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//getWinner

function getWinner(p, c) {
    if (p === c) {
        return 'draw'
    } else if (p === 'rock'){
        if (c==='paper'){
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'paper'){
        if(c==='scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if ( p === 'scissors') {
        if (c === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }
}

//Show winner

function showWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreBoard.player++
        result.innerHTML = `
            <h1 class="text-win">you win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <string>${computerChoice.charAt(0).toUpperCase()  + computerChoice.slice(1)}</strong></p>
        `
    } else if (winner ==='computer') {
        scoreBoard.computer++
        result.innerHTML =`
            <h1 class="text-lose">you lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <string>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    } else {
        scoreBoard.draw++
        result.innerHTML= `
            <h1 class="#">Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <string>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
    }

    score.innerHTML = `
        <p class="player">Player: ${scoreBoard.player}</p>
        <p class="draw">Draw: ${scoreBoard.draw}</p>
        <p class="computer">Computer: ${scoreBoard.computer}</p>
        

    `

    modal.style.display = 'block'
}

//restart game

function restartGame() {
    scoreBoard.player = '0'
    scoreBoard.computer = '0'
    scoreBoard.draw = '0'
    score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Draw: ${scoreBoard.draw}</p>
        <p>Computer: ${scoreBoard.computer}</p>
        

    `
}

//clear modal

function clearModal(event) {
    if (event.target===modal) {
        modal.style.display = 'none'
    }
}

//event listener

choices.forEach(choice => {
    return choice.addEventListener('click', play)
})
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)
})