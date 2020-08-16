// Main.js contiene las funciones independientes
const background = new Background()
const path = new Path()

$startButton.addEventListener('click', e => {
    const player = new Character()
    player.draw()
    setInterval(update, 1000/60)
})

function update(){
    path.draw()
}


