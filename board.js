// Board.js contiene la clases del fondo del canvas
// Static background
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
// Dynamic path
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
        // Fix replication issue with path 
        // this.x--
        // if(this.x < -$canvas.width)this.x = 0
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        // ctx.drawImage(
        //     this.img,
        //     this.x + $canvas.width,
        //     this.y,
        //     this.width,
        //     this.height
        // )
    }

}

// Dibujar recuadros playboard
function drawPlayboard(){
    // Dibujar rectángulos de numeros
    // Starter
    ctx.font = "30px Sans-serif"
    ctx.fillStyle = "white"
    ctx.fillText(`${x0}`, 220, 50)
    // Operador actual
    ctx.font = "30px Sans-serif"
    ctx.fillStyle = "white"
    ctx.fillText(`${operandString} ${y}`, 280, 50)
    // Marco del resultado
    ctx.fillStyle = "white"
    ctx.rect(370, 20, 60, 40)
    ctx.stroke()
    ctx.fillRect(370, 20, 60, 40)
}
