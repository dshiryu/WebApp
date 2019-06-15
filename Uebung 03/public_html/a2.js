var countW = 1;
var countDW = 1;

document.write("Hallo Web-Apps<br>");

for (var i = 1; i <= 10; i++){
    if (i % 2 === 0) document.write(i+" ist gerade.<br>");
    else document.write(i+" ist ungerade.<br>");
}

while (countW <= 10){
    document.write(countW+"<br>");
    countW++;
}

do {
    document.write(countDW+"<br>");
    countDW++;
} while (countDW <= 10) ;
    
    


