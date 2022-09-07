
import readline from 'readline'

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const obj = {
    0: undefined,
    1: undefined,
    2: 'X',
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined
}

function game () {
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (obj[i] === undefined) {
            console.log('[ ]')
        } else if (obj[i] === 'X') {
            console.log('[X]')
        } else if (obj[i] === '0') {
            console.log('[0]')
        }
    }

    
}


function checkResult () {
    if (obj[0] === obj[1] === obj[2] === 'X') {
        
    }
}

read.question('skriv nåt', answer => {
    console.log(answer)
})

game()