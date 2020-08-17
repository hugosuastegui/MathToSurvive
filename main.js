// Main.js contiene las funciones independientes
const background = new Background()
const path = new Path()
const player = new Character()

$startButton.addEventListener('click', e => {
    // Set interval
    setInterval(update, 1000/2)
})

function update(){
    frames++
    console.log(frames)
    console.log(x0, operandString, y)
    clearCanvas()
    background.draw()
    path.draw()
    player.draw()
    drawPlayboard()
    getRandomNumbers(1)
}

function clearCanvas(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}


