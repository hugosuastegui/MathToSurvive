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
    clearCanvas()
    background.draw()
    path.draw()
    player.draw("white")
    com.draw("black")
    drawPlayboard()
    while (index < userInput.length){
        writeUserInput(index)
        index++
    }
    drawCountdown()
    drawScore()
    // EL 1 es el nivel hardcoded que hay que cambiar por el user input del DOM manipulation
    getRandomNumbers(level)
    // drawGameOver()
}

function clearCanvas(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}

document.addEventListener('keydown', e => {
    checkIfNumber(e)
    checkAnswer(e, com)
})
