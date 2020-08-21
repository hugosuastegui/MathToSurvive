// Main.js contiene las funciones independientes

$startButton.addEventListener('click', e => {
    // Set interval
    if(start === true){
        start = false
        level = document.querySelector("#level").selectedIndex +1
        gender = document.querySelector("#gender").selectedIndex
        intervalId = setInterval(update, 1000/60)
    }
})


const background = new Background()
const path = new Path()
const p1 = new Character()
const com = new Computer()

function update(){
    frames++
    let index = 0
    clearCanvas()
    background.draw()
    path.draw()
    p1.draw()
    com.draw("black")
    drawPlayboard()
    while (index < userInput.length){
        writeUserInput(index)
        index++
    }
    drawCountdown()
    timeOut(timeLeft, com, p1)
    gameOver(p1, com)
    drawScore()
    getRandomNumbers(level)
    spriteAnimation(frames, com, p1)
}

function clearCanvas(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}

document.addEventListener('keydown', e => {
    checkIfNumber(e)
    checkIfDelete(e)
    checkAnswer(e, com, p1)
})
