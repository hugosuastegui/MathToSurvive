// Main.js contiene las funciones independientes
const background = new Background()
const path = new Path()

$startButton.addEventListener('click', e => {
    const player = new Character()
    player.draw()
    // Dibujar rectángulos de numeros
    // Starter
    ctx.fillStyle = "white"
    ctx.rect(250, 25, 50, 30)
    ctx.stroke()
    // Operador actual
    ctx.fillStyle = "white"
    ctx.rect(320, 25, 50, 30)
    ctx.stroke()
    // Resultado
    ctx.fillStyle = "white"
    ctx.rect(390, 20, 60, 40)
    ctx.fillRect(390, 20, 60, 40)
    ctx.stroke()
    // Operador próximo
    ctx.fillStyle = "white"
    ctx.rect(470, 25, 50, 30)
    ctx.stroke()

    // Set interval
    setInterval(update, 1000/60)
})

function update(){
    // path.draw()
}


