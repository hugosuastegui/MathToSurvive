// Character.js contiene las clases de los personajes y sus métodos
class Character{
    constructor(){
        this.width = 1860
        this.height = 139
        this.x = 650
        this.y = 210
        this.sx = 0
        this.sy = 0
        this.swidth = 1860/15
        this.sheight = 139
        this.img = new Image()
        this.img.src = 'images/boy-sprite.png'
    }
    draw(){
        ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.swidth, this.sheight )
    }
}

class Computer{
    constructor(){
        this.width = 1860
        this.height = 137
        this.x = 50
        this.y = 220
        this.sx = 0
        this.sy = 0
        this.swidth = 1860/15
        this.sheight = 137
        this.img = new Image()
        this.img.src = 'images/orc-sprite.png'
    }
    draw(){
        ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.swidth, this.sheight )
    }
}