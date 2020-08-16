// Board.js contiene la clases del fondo del canvas

class Background{
    constructor(img, x, y, width, height){
        this.x = 0
        this.y = 0
        this.width = $canvas.width
        this. height = $canvas.height
        this.img = new Image()
        this.img.src = 'images/background.png'
        this.img.onload = () => {
            this.draw()
        }
    }

    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
}

class Path extends Background{
    constructor(img, x, y, width, height){
        super(width)
        this.x = 0
        this.y = 0
        this.height = $canvas.height - 10
        this.img = new Image()
        this.img.src = 'images/path.png'
        this.img.onload = () => {
            this.draw()
        }
    }
    
    draw(){
        this.x--
        if(this.x < -$canvas.width)this.x = 0
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        ctx.drawImage(
            this.img,
            this.x + $canvas.width,
            this.y,
            this.width,
            this.height
        )
    }

}