let canvasW = 500;
let canvasH = 500;
let canvas = document.getElementById("myCanvas");
canvas.setAttribute("width",canvasW);
canvas.setAttribute("height",canvasH);


class Recheckt{
    constructor(posx, posy, width, height, color){
        this.posx = posx;
        this.posy = posy;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.posx, this.posy, this.width, this.height);
    }
}

const object = new Recheckt(0, 0, 150, 75, "#FF0000");
object.draw(canvas.getContext("2d"));

let listRech = [object];
function  mouseClick(event){
    let x = event.clientX;
    let y = event.clientY;
    let max = 300;
    let min  = 10;
    let w = random = Math.random() * (max - min) + min; 
    let h = random = Math.random() * (max - min) + min; 
    const randomRech = new Recheckt(x, y, w, h, "#FF0000");
    listRech.push(randomRech);
    console.log(listRech);
    randomRech.draw(canvas.getContext("2d"));
}

function clear(){
    let contect = canvas.getContext("2d");
    contect.clearRect(0, 0, canvasW, canvasH);
}

function redo(){
    let contect = canvas.getContext("2d");
    for (let i = 0; i < listRech.length; i++){
        listRech[i].draw(canvas.getContext("2d"));
    }
}

canvas.addEventListener("click",mouseClick);
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("redo").addEventListener("click",redo);
