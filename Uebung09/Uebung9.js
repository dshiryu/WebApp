let canvasW = 500;
let canvasH = 500;
let canvas = document.getElementById("myCanvas");
canvas.setAttribute("width",canvasW);
canvas.setAttribute("height",canvasH);

class Figur{
    constructor(posx, posy){
        this.posx = posx;
        this.posy = posy;
    }
    draw(context){}
}
class Recheckt extends Figur{
    constructor(posx, posy, width, height,color){
        super(posx,posy);
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        super.draw(context);
        context.fillStyle = this.color;
        context.fillRect(this.posx, this.posy, this.width, this.height);
    }
}

class Kreise extends Figur{
    constructor(posx, posy, radius, color){
        super(posx,posy);
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        super.draw(context);
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.posx, this.posy, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }
}

const recheckt = new Recheckt(0, 0, 150, 75, "#FF0000");
const kreise = new Kreise(100, 200, 20, "#008000");
recheckt.draw(canvas.getContext("2d"));
kreise.draw(canvas.getContext("2d"));

let listFigur = [recheckt, kreise];
function  mouseClick(event){
    let x = event.clientX;
    let y = event.clientY;
    let max = 100;
    let min  = 10;
    let w = random = Math.random() * (max - min) + min; 
    let h = random = Math.random() * (max - min) + min;
    let r = random = Math.random() * (max - min) + min;
    const randomRech = new Recheckt(x, y, w, h, "#FF0000");
    const randomKreise = new Kreise(x, y, r, "#008000");
    listFigur.push(randomRech);
    listFigur.push(randomKreise);
    console.log(listFigur);
    randomRech.draw(canvas.getContext("2d"));
    randomKreise.draw(canvas.getContext("2d"));
}

function clear(){
    let contect = canvas.getContext("2d");
    contect.clearRect(0, 0, canvasW, canvasH);
}

function redo(){
    let contect = canvas.getContext("2d");
    for (let i = 0; i < listFigur.length; i++){
        listFigur[i].draw(canvas.getContext("2d"));
    }
}

canvas.addEventListener("click",mouseClick);
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("redo").addEventListener("click",redo);
