// helpers.js contiene la funcionalidad de las teclas (key) así como demás event listeners

// Get random numbers according to the specified level (level 1 for now)
function getRandomNumbers(level){
    switch(level){
        case 1:
            // Result can't be higher than 100, addition
            console.log("En nivel 1")
            if(fuelOn === true){
                fuelOn = false
                console.log("Fuel On activado")
                operand = Math.floor(Math.random()*1+1)
                return toggleByOperand(operand, 100)
            }
            break
        case 2:
            // Result can't be higher than 300, addition
            operand = Math.floor(Math.random()*1+1)
            return toggleByOperand(operand, 300)
            break
        case 3:
            // Result can't be higher than 500, addition and multiplication
            operand = Math.floor(Math.random()*3+1)
            return toggleByOperand(operand, 500)
            break
        case 4: 
            // Result can't be higher than 1000, addition and multiplication
            operand = Math.floor(Math.random()*3+1)
            return toggleByOperand(operand, 1000)
            break
        default:
            return 'Please select a correct level'
            break
    }
}

function toggleByOperand(operand, level){
    switch(operand){
        case 1: 
            operandString = '+'
            x0 = Math.floor(Math.random()*(level-1)+1)
            y = Math.floor(Math.random()*(level-1)+1)
            while(y+x0 >= level){
                y = Math.floor(Math.random()*(level-1)+1)
            }
            result = x0 + y
            return [x0, operandString, y, result]
            break
        case 2:
            operandString = '-'
            x0 = Math.floor(Math.random()*(level-1)+1)
            y = Math.floor(Math.random()*x0 + 1) 
            result = x0 - y
            return [x0, operandString, y, result]
            break
        case 3:
            operandString = '*'
            x0 = Math.floor(Math.random()*(level/2-1)+1)
            y = Math.floor(level/x0)
            while(x0*y >= level){
                y = Math.floor(Math.random()*(level-2)+2)
            }
            result = x0 * y
            return [x0, operandString, y, result]
            break
        case 4: 
            operandString = '/'
            x0 = Math.floor(Math.random()*(level-1)+1)
            y = Math.floor(Math.random()*(level-1)+1)
            while(x0%y != 0){
                y = Math.floor(Math.random()*level-1+1)
            }
            result = x0 / y
            return [x0, operandString, y, result]
            break
    }
}

document.addEventListener('keydown', e => {
    // Checar si se gana o se pierde
    if(e.keyCode === 9){
        if(parseInt(userInput.join('')) === ans){
            userInput = []
            fuelOn = true
            console.log("ganaste")
        }else {
            console.log("Intenta de nuevo")
        }
    }
    // Si se llega a tener más de cuatro numeros en el input se toma como una mala
    if(userInput.length > 4) userInput = []
    if(e.keyCode > 48 || e.keyCode < 57)
    userInput.push(e.key)
})