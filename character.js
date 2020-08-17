// Character.js contiene las clases de los personajes y sus métodos
class Character{
    constructor(img, x, y, width, height){
        this.width = 30
        this.height = 30
        this.x = ($canvas.width/2) - (this.width/2)
        this.y = 300
        // this.img = new Image()
        // this.img.src = ''
        // this.img.onload = () => {
        //     draw()
        // }
    }
    draw(){
        ctx.fillStyle = "black"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}