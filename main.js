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
    console.log(frames)
    console.log(x0, operandString, y)
    clearCanvas()
    background.draw()
    path.draw()
    player.draw("white")
    com.draw("black")
    drawPlayboard()
    drawCountdown()
    drawScore()
    getRandomNumbers(1)
}

function clearCanvas(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}


