
import readline from 'readline'


const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const board = {
    0: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined
}

let gameFinished = false

const game = async () => {
    renderBoard()

    if (!gameFinished) {
        await move().then(pos => handleMove(pos))
        checkResult()
        game()
    }
}

// Render game.
function renderBoard () {
    for (let i = 0; i < Object.keys(board).length; i++) {
        if (board[i] === undefined) {
            console.log('[ ]')
        } else if (board[i] === 'X') {
            console.log('[X]')
        } else if (board[i] === '0') {
            console.log('[0]')
        }
    }
}


function checkResult () {
    if (board[0] === 'X' && board[1] === 'X' && board[2]) {
        gameFinished = true
        console.log("X won")
    } else if (board[3] === 'X' && board[4] === 'X' && board[5]) {
        gameFinished = true
        console.log("X won")
    } else if (board[6] === 'X' && board[7] === 'X' && board[8]) {
        gameFinished = true
        console.log("X won")
    }
}

const handleMove = (pos) => {
    if (board[pos] === undefined) {
        board[pos] = 'X'
    } else {
        console.log("Ruta upptagen")
        move()
    }
}


const move = () => {
    return new Promise(resolve => {
        read.question("Välj ruta (0-8)", function(answer) {
            resolve(answer)
        });
    })
}


game()
