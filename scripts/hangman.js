class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    makeGuesses(letter) {
        letter = letter.toLowerCase()

        if (this.status !== 'playing') {
            return
        }

        if (!this.guessedLetters.includes(letter)) {
            this.guessedLetters.push(letter)
            if (!this.word.includes(letter)) {
                this.remainingGuesses--
            }
        }

        this.setStatus()
    }

    setStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        }
    }

    get statusMessage(){
        if (this.status === 'playing') {
            return `Remaining guesses : ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Damn ! The word was  ${this.word.join('')}`
        } else if (this.status === 'finished') {
            return 'Good game ! You found the word'
        }
    }
}
