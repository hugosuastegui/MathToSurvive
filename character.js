// Character.js contiene las clases de los personajes y sus métodos
class Character{
    constructor(){
        this.width = 30
        this.height = 30
        this.x = (700 - this.width/2)
        this.y = 300
        // this.img = new Image()
        // this.img.src = ''
        // this.img.onload = () => {
        //     draw()
        // }
    }
    draw(color){
        ctx.fillStyle = color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Computer extends Character{
    constructor(width, height, y){
        super(width, height, y)
        this.width = 30
        this.height = 30
        this.x = (50 - this.width/2)
        this.y = 300
    }
}