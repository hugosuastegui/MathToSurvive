// helpers.js contiene las funciones auxiliares de main.js

// Get random numbers according to the specified level (level 1 for now)
function getRandomNumbers(level){
    switch(level){
        case 1:
            // Result can't be higher than 100, addition
            if(fuelOn === true){
                fuelOn = false
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

// Funcion para saber si lo que se tecleo fue un número
function checkIfNumber(e){
    if(e.keyCode > 47 && e.keyCode < 59){
        userInput.push(e.key)
    }
}

// Función para checar si el resultado es el correcto, pasar el resultado a x0, mover los personajes, camiar el score, resetear tiempo y valor de y
function checkAnswer(e, computer){
    if(e.keyCode === 32){
        let userInputNumber = parseInt(userInput.join(''))
        switch(operandString){
            case '+':
                ans = x0 + y
                if(ans === userInputNumber){
                    score++
                    userInput = []
                    timeLeft = timeToSolve
                    fuelOn = true
                    getRandomNumbers(level)
                }else{
                    userInput = []
                    computer.x+=50
                    timeLeft = timeToSolve
                }
                break
            case '-':
                ans = x0 - y
                if(ans === userInputNumber){
                    score++
                    userInput = []
                    timeLeft = timeToSolve
                    fuelOn = true
                    getRandomNumbers(level)
                }else{
                    userInput = []
                    computer.x+=50
                    timeLeft = timeToSolve
                }
                break
            case '*':
                ans = x0 * y
                if(ans === userInputNumber){
                    score++
                    userInput = []
                    timeLeft = timeToSolve
                    fuelOn = true
                    getRandomNumbers(level)
                }else{
                    userInput = []
                    computer.x+=50
                    timeLeft = timeToSolve
                }
                break
            case '/':
                ans = x0 / y
                if(ans === userInputNumber){
                    score++
                    userInput = []
                    timeLeft = timeToSolve
                    fuelOn = true
                    getRandomNumbers(level)
                }else{
                    userInput = []
                    computer.x+=50
                    timeLeft = timeToSolve
                }
                break
            }
        }
}

// Función para ejecutar gameOver
function gameOver(player, computer){
    if(player.x === computer.x){
        drawGameOver()
        clearInterval(intervalId)
    }
}

// Función que determine si el tiempo se acabo
function timeOut(time, computer){
    if(time === 0){
        userInput = []
        computer.x+=50
        timeLeft = timeToSolve 
    }
}


