// Main.js contiene las funciones independientes
const background = new Background()
const path = new Path()
const player = new Character()
const com = new Computer()

$startButton.addEventListener('click', e => {
    // Set interval
    setInterval(update, 1000/60)
})

function update(){
    frames++
    let index = 0
    console.log(frames)
    console.log(x0, operandString, y)
    clearCanvas()
    background.draw()
    path.draw()
    player.draw("white")
    com.draw("black")
    drawPlayboard()
    console.log(userInput)
    while (index < userInput.length){
        writeUserInput(index)
        index++
    }
    drawCountdown()
    drawScore()
    getRandomNumbers(1)
    // drawGameOver()
}

function clearCanvas(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}

document.addEventListener('keydown', e => {
    checkIfNumber(e)
})
    // Checar que lo tecleado sea número
    
    // Checar si se gana o se pierde
    // Tab => 9
    // if(e.keyCode === 9){
    //     if(parseInt(userInput.join('')) === ans){
    //         userInput = []
    //         fuelOn = true
    //         console.log("ganaste")
    //     }else {
    //         console.log("Intenta de nuevo")
    //     }
    // }
    // // Si se llega a tener más de cuatro numeros en el input se toma como una mala
    // if(userInput.length > 4) userInput = []
