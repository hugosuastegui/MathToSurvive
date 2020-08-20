// Character.js contiene las clases de los personajes y sus métodos
class Character{
    constructor(genre){
        this.width = 694
        this.height = 139
        this.x = 650
        this.y = 210
        this.sx = 0
        this.sy = 0
        this.swidth = 694/5
        this.sheight = 139
        this.gender = gender
        this.imgBoy = new Image()
        this.imgBoy.src = 'images/boy-sprite2.png'
        this.imgGirl = new Image()
        this.imgGirl.src = 'images/girl-sprite2.png'
    }
    draw(){
        if(gender === 1){
            ctx.drawImage(this.imgGirl, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.swidth, this.sheight )
        }else{
            ctx.drawImage(this.imgBoy, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.swidth, this.sheight )
        }
    }
}

class Computer{
    constructor(){
        this.width = 664
        this.height = 139
        this.x = 50
        this.y = 210
        this.sx = 0
        this.sy = 0
        this.swidth = 664/5
        this.sheight = 137
        this.img = new Image()
        this.img.src = 'images/orc-sprite2.png'
    }
    draw(){
        ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.swidth, this.sheight )
    }
}