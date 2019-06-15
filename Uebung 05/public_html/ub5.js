var randomArray = Array();
function randomNumber(n, a, b) {
    

    for (i = 0; i < n; i++) {
        randomArray[i] = Math.random() * (b - a) + a;
    }
    return randomArray;
}

// used together with array.reduce(summe, 0) to reduce/sum the array to 1 value 
function summe(total, arrayIndex){
    return total + arrayIndex;
}

function groessteZahl() {
    return Math.max(...randomArray);
}

function dayAlert(){
    var createDate = new Date();
    var todayDay = createDate.getDay();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    alert(weekday[todayDay]);
}
var result;
function showResult(){
    result = {
        firstName: document.getElementById('firstName').value, 
        lastName: document.getElementById('lastName').value, 
        givenAge: document.getElementById('givenAge').value
    };
    console.log(result);
    return "You are " + result["firstName"] + " " + result["lastName"] +
            ", and you are "+ result["givenAge"] + " years old.";
}

function universe(n){
    let baseArray = new Array (n); //column
    let firstArray = new Array (n); //lines
    
    // creates the first line of the array with its elements being 0 or 1
    for (let i = 0; i < firstArray.length; i++){
        var zeroOrOne = Math.random();
     //Math.round(Math.random())   
        if(zeroOrOne < 0.5) zeroOrOne = Math.floor(zeroOrOne);
        else zeroOrOne = Math.ceil(zeroOrOne);
        
        firstArray.splice(i, 1, zeroOrOne); // applies the value to the index
    }
    console.log(firstArray);
    
    // takes each element of the base array and turn it into a new array (2D)
    for (let i = 0; i < baseArray.length; i++){
        baseArray[i] = new Array (n);
    }
    baseArray.splice(0, 1, firstArray);
    //baseArray.splice(0, 1, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]); // test with a fixed array
    
    //debugger;
    
    /* runs through the entire 2D array and implement the rules
     * rules: if the number of neighbor elements with the present element 
     * is equals 2 or 4, then the current element becomes 1, else it is 0.
     * The Array should be considered a ring, so the last element considers the
     * first two of the same array.
     */
    //goes through the lines
    for (let i = 1; i < baseArray.length ; i++){
        if(n === 0 || n === 1) {
            break;
        } 
        // declaring after otherwise if n was 0 or 1 it would waste time creating variables that would not be used
        let value2Left = 0;
        let value1Left = 0;
        let valueCurrent = 0;
        let value1Right = 0;
        let value2Right = 0;
        let finalValue = 0;
        
        //enters the array on that line and check values
        for (let j = 0; j < baseArray.length; j++) {
           let count = 0; 
           // setting the borders, else = all other cases
            if(j === 0){
                value2Left = baseArray[i - 1][baseArray.length - 2];
                value1Left = baseArray[i - 1][baseArray.length - 1];
                valueCurrent = baseArray[i - 1][j];
                value1Right = baseArray[i - 1][j + 1];
                value2Right = baseArray[i - 1][j + 2];
            } else if(j === 1) {
                value2Left = baseArray[i - 1][baseArray.length - 1];
                value1Left = baseArray[i - 1][j - 1];
                valueCurrent = baseArray[i - 1][j];
                value1Right = baseArray[i - 1][j + 1];
                value2Right = baseArray[i - 1][j + 2];
            } else if(j === baseArray.length - 2){
                value2Left = baseArray[i - 1][baseArray.length - 4];
                value1Left = baseArray[i - 1][baseArray.length - 3];
                valueCurrent = baseArray[i - 1][baseArray.length - 2];
                value1Right = baseArray[i - 1][baseArray.length - 1];
                value2Right = baseArray[i - 1][0];
            } else if(j === baseArray.length - 1){
                value2Left = baseArray[i - 1][baseArray.length - 3];
                value1Left = baseArray[i - 1][baseArray.length - 2];
                valueCurrent = baseArray[i - 1][baseArray.length - 1];
                value1Right = baseArray[i - 1][0];
                value2Right = baseArray[i - 1][1];
            } else {
                value2Left = baseArray[i - 1][j - 2];
                value1Left = baseArray[i - 1][j - 1];
                valueCurrent = baseArray[i - 1][j];
                value1Right = baseArray[i - 1][j + 1];
                value2Right = baseArray[i - 1][j + 2];
            }
            
            // else if would not work here for what I intend
            if(value2Left === 1) count++;
            if(value1Left === 1) count++;
            if(valueCurrent === 1) count++;
            if(value1Right === 1) count++;
            if(value2Right === 1) count++;
            
            // assign 1 or 0
            if(count === 2 || count === 4) finalValue = 1;
            else finalValue = 0;    
            
            // apply the value
            baseArray[i].splice(j, 1, finalValue);
        }
        
    }
    console.log(baseArray);
    
    // prints the array, 2 for loops because it's a 2D array, breaks the line on the last element
    for(let i = 0; i < baseArray.length; i++){
        for(let j = 0; j < baseArray.length; j++){
            if(baseArray[i][j] === 1) baseArray[i][j] = "x";
            else baseArray[i][j] = " ";
            
            if(j === baseArray.length - 1) document.write(baseArray[i][j] + "<br>");
            else document.write(baseArray[i][j]);
            
        }
    }
    
}

