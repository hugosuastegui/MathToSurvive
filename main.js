// Main.js contiene las funciones independientes
const background = new Background()
const path = new Path()
const p1 = new Character()
const com = new Computer()

$startButton.addEventListener('click', e => {
    // Set interval
    if(start === true){
        start = false
        let x = document.querySelector("#level").selectedIndex
        level = x + 1
        console.log(level)
        intervalId = setInterval(update, 1000/60)
    }
})

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
}

function clearCanvas(){
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, $canvas.width, $canvas.height)
}

document.addEventListener('keydown', e => {
    checkIfNumber(e)
    checkAnswer(e, com, p1)
})
