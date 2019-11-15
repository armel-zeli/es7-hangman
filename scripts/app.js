let puzzleEl = document.querySelector('#puzzle')
let remainingGuessesEl = document.querySelector('#remainingGuesses')
let hangman1

/**
 * Display the game
 */
const render = () => {
    puzzleEl.innerHTML = ''
    remainingGuessesEl.textContent = hangman1.statusMessage
    hangman1.puzzle.split('').forEach((letter,index) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

/**
 * Start the game
 *
 * @returns {Promise<void>}
 */
const startGame = async () => {
    const puzzle = await getPuzzle('1')
    hangman1 = new Hangman(puzzle, 8)
    render()
}

startGame()

/**
 * When user click on the keyboard
 */
window.addEventListener('keypress', (e) => {
    hangman1.makeGuesses(e.key)
    render()
})

/**
 * Restart the game
 */
document.querySelector('#reset').addEventListener('click', startGame)






