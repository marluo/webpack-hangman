class Hangman {
    constructor(word, remaningGueses) {
        this.word = word.toLowerCase().split('')
        this.remaningGueses = remaningGueses
        this.guessedWords = []
        this.status = 'Playing'

    }
    get puzzle() {
        let asterixWord = ''
        this.word.forEach((letter) => {
            if (this.guessedWords.includes(letter) || letter === ' ') {
                asterixWord = asterixWord + letter
            }
            else {
                asterixWord = asterixWord + '*'
            }

        })
        return asterixWord
    }
    makeGuess(letter) {

        letter = letter.toLowerCase()
        const isUnqiue = !this.guessedWords.includes(letter)
        const badGuess = !this.word.includes(letter)
        if (this.status !== 'Playing') {
            return
        }
        if (isUnqiue) {
            this.guessedWords.push(letter)
        } if (isUnqiue && badGuess) {
            this.remaningGueses--
        }

        this.gameStatus()


    }
    gameStatus() {
        const finished = this.word.every((letter) => this.guessedWords.includes(letter) || letter === ' ')
        if (finished) {
            this.status = 'Finished'
        } else if (this.remaningGueses <= 0) {
            this.status = 'Failed'
        } else {
            this.status= 'Playing'

        }
        
        

    }get statusMessage() {
        if (this.status === 'Playing') {
            return `You have ${this.remaningGueses} guesses left`

        } else if (this.status === 'Failed') {
            return `Nice Try! The word was ${this.word.join('')}`

        } else if (this.status === 'Finished') {
            return `Great work you guessed the word`
        }

    } remaining() {
        return this.remaningGueses
    }

}


export {Hangman as default}












