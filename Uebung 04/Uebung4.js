function myFunction() {
    var today = new Date();
    var dates = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag",
"Samstag"];
    alert(dates[today.getDay()]); 
  }

function sum(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    alert(num1+num2); 
}

function concate(){
    string1 = document.getElementById("string1").value;
    string2 = document.getElementById("string2").value;
    alert(string1+string2); 
}


function summe(n){
    if (n ==0) return 0;
    else return n + summe(n-1);
}
document.getElementById("summe").innerHTML = summe(7);
 

function fakRecursiv(n){
    if (n == 1) return 1;
    return n * fakRecursiv(n-1);
}
document.getElementById("fakrecursiv").innerHTML = fakRecursiv(5);

function fakLoop(n){
    var fak = 1;
    while (n>1){
        fak = fak * n;
        n--;
    }
    return fak;
}
document.getElementById("fakloop").innerHTML = fakLoop(5);

function pattern(numLines){ 
    var lines="";
    var stars = "+"; 
    for (var i = 0; i < numLines; i++) {
        var spaces = "";
        for (var j = 1; j < (numLines-i); j++){
            spaces = spaces + " ";
        }
        lines = lines + "<br/>" +spaces + stars;
        stars = stars + "++";
    } 
return lines;
} 
document.getElementById("pattern").innerHTML = "<pre>"+pattern(5)+"</pre>";





