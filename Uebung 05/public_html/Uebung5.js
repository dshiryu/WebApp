function array(n, a, b){
    var numbers = [n];
    for (i = 0; i < n; i++){
        numbers[i]= Math.floor(Math.random() * (b-a) + a);
    }
  return numbers;  
}
var array = array(4,-10,9);
document.getElementById("random").innerHTML = array;

function summArray(arr){
    var summ = 0;
    for (i  = 0; i < arr.length; i++){
        summ = summ + arr[i];
    }
    return summ;
}
document.getElementById("summ").innerHTML = summArray(array);

function max(arr){
    var max = arr[0];
    for (i  = 0; i < arr.length-1; i++){
        if (arr[i]<arr[i+1]) max = arr[i+1];
    }
    return max;
}
document.getElementById("max").innerHTML = max(array);

function todaySwitch(){
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
alert(day);
}

function todayArray() {
    var today = new Date();
    var dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
"Saturday"];
    alert(dates[today.getDay()]); 
}


function multArr(n,m){
    var multArr = [n];
    var arr = [m];
    for (i = 0; i < n; i++){
        for (j = 0; j<m;j++){
            arr[j]= Math.floor(Math.random() * (10-1) + 1);
        }
        multArr[i] = arr + "</br>";
    }
    return multArr;
}
document.getElementById("multarray").innerHTML = multArr(3,5);


// 2. Aufgabe
let size = 10;
let line1 = new Array(size);
let line2 = new Array(size);

for (let i = 0; i < size; i++){
    line1[i] = Math.round(Math.random());
}

//return the cells from above line 
function getOldCell(line, x){
    x = (x < 0)? (x + size) : x;
    return line[x];
}

// calculate a cell from the next line
function getNewCell(oldLine, x){
    let newElement = 0;
    for (let i = x-2; i <= x+2; i++){
        if (getOldCell(oldLine, i) === 1 ) newElement++;
    }
    return (newElement==4||newElement==2)? 1:0;
}

// create new line
function createNewArr(oldLine, newLine){
    for (let i = 0; i< size; i++){
    newLine[i] = getNewCell(oldLine, i);
    }
}

//print the lines with "x" and space
function printSystem(line, element){
    for (let i = 0; i<size; i++){
        element.innerText +=(line[i] == 1 ? "x" : " ");
    }
    element.innerText += "\n";
}

let printCounter = 0;
let element = document.getElementById("modellUniversum");

// main loop
var x = setInterval(function(){
    let realLine1 = (printCounter % 2 == 0 ? line1 : line2);
    let realLine2 = (printCounter % 2 == 0 ? line2 : line1);
    printSystem(realLine1, element);
    createNewArr(realLine1, realLine2);
    printCounter+=1;
},250);

function myStopFunction() {
    clearInterval(x);
  }












