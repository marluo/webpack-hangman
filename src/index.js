import Hangman from './hangman'
import getPuzzle from './requests'

let guessedLetterOne
let hangmanWord = document.querySelector("#puzzleText")
let guessesLeft = document.querySelector('#guessesLeft')
let hangmanImage = document.querySelector('#hangyman')
let imgGuessesLeft = document.createElement("img");
imgGuessesLeft.src = 'images/hangman8.png'




hangmanImage.appendChild(imgGuessesLeft);
window.addEventListener('keypress', (e) => {
    const keypress = String.fromCharCode(e.charCode)
    let remaining = guessedLetterOne.remaining();
    guessedLetterOne.makeGuess(keypress)
    imgGuessesLeft.src = `images/hangman${remaining}.png`
    guessedLetterOne.statusMessage
    console.log(hangmanImage.src)
    render()
})

const render = () => {
    hangmanWord.innerHTML = ''
    guessesLeft.textContent = guessedLetterOne.statusMessage

    
    const splitWord = guessedLetterOne.puzzle.split('')
    splitWord.forEach((letter) =>{
        let spanCreate = document.createElement('span')
        spanCreate.textContent = letter
        hangmanWord.appendChild(spanCreate)
        guessesLeft.textContent = guessedLetterOne.statusMessage
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    guessedLetterOne = new Hangman(puzzle, 8)
    render()
}

document.querySelector('#hej').addEventListener('click', startGame)

startGame()

