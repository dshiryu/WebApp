/* button will disappear when being clicked.
Utilze "display"
*/

let buttonEl = document.getElementById("disappear");
buttonEl.onclick = function() {
	document.getElementById("show").style.display = "block";
	buttonEl.style.display = "none";
};

let mitglieder = [
    {
    name : "Young",
    vorname: "Allan",
    email : "allan@young.com"
    },
    {
    name : "Old",
    vorname: "Huong",
    email : "huong@old.org"
    },
    {
        name : "Doe",
        vorname: "Jane",
        email : "jane@doe.org"
        }
   ];

/*Dynamically build the table with content taking from the object above
Use "insertRow() and insertCollumn()" */ 
function buildTable(){
    for (let i = 0; i < mitglieder.length; i++){
        let table = document.getElementById("table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = mitglieder[i].name;
        cell2.innerHTML = mitglieder[i].vorname;
        cell3.innerHTML = mitglieder[i].email;
        cell4.innerHTML = '<input type="button" value="add" \n\
            onclick="addToOtherTable()">  \n\
                <input type="button" value="remove" onclick="removeRow()">';
    }
}

/*Another way to build the table but using "appendChild()"*/
    
function buildTable2(){
    
    for (let i = 0; i < mitglieder.length; i++){
        let table = document.getElementById("table");
        let node = document.createElement("tr");
        let nodeContent1 = document.createElement("td");
        let nodeContent2 = document.createElement("td");
        let nodeContent3 = document.createElement("td");
        let nodeContent4 = document.createElement("td");
        node.appendChild(nodeContent1);
        node.appendChild(nodeContent2);
        node.appendChild(nodeContent3);
        node.appendChild(nodeContent4);
        table.appendChild(node);
        nodeContent1.innerHTML = mitglieder[i].name;
        nodeContent2.innerHTML = mitglieder[i].vorname;
        nodeContent3.innerHTML = mitglieder[i].email;
        nodeContent4.innerHTML = '<input type="button" value="add" \n\
            onclick="addToOtherTable()">  \n\
                <input type="button" value="remove" onclick="removeRow()">';
    }
}

//just need to call one function
buildTable2();

////////
////////
////////
////////
// from this point on it's what I did, except for the buttons on node4 I didn't change the code above

// this part is always running to identify rows and columns (I found it online and adapted until it worked)
var table = document.getElementById("table"), rIndex, cIndex;

for(var i = 1; i < table.rows.length; i++) {// table rows
    for(var j = 0; j < table.rows[i].cells.length; j++) {// row cells
        table.rows[i].cells[j].onmouseover = function() { //.onclick requires double click to add
            rIndex = this.parentElement.rowIndex;
            cIndex = this.cellIndex+1;
            //console.log("Row : "+rIndex+" , Cell : "+cIndex); //shows on the console where on the table the mouse is
        };
    }
}
//end of detection

//booleans to impede addToOtherTable() to add infinitely
//true: already added
//false: not added
var flag0 = false; //row 1, in array: 0
var flag1 = false; //row 2, in array: 1
var flag2 = false; //row 3, in array: 2
function addToOtherTable(x){
    let table = document.getElementById("table"); // table with elements from the array
    let table2 = document.getElementById("table2"); //table that is build with the method
    //create line (copy of what you did)
    let node = document.createElement("tr");
    let nodeContent1 = document.createElement("td");
    let nodeContent2 = document.createElement("td");
    let nodeContent3 = document.createElement("td");
    
    if(rIndex - 1 === 0 && flag0 === false){ // minus 1 so it's the same value from the array, if the value is true the line isn't added
        node.appendChild(nodeContent1);
        node.appendChild(nodeContent2);
        node.appendChild(nodeContent3);
        table2.appendChild(node);
        nodeContent1.innerHTML = mitglieder[0].name;
        nodeContent2.innerHTML = mitglieder[0].vorname;
        nodeContent3.innerHTML = mitglieder[0].email;
        flag0 = true;
    }else if(rIndex - 1 === 1 && flag1 === false){
        node.appendChild(nodeContent1);
        node.appendChild(nodeContent2);
        node.appendChild(nodeContent3);
        table2.appendChild(node);
        nodeContent1.innerHTML = mitglieder[1].name;
        nodeContent2.innerHTML = mitglieder[1].vorname;
        nodeContent3.innerHTML = mitglieder[1].email;
        flag1 = true;
    }else if(rIndex - 1 === 2 && flag2 === false){
        node.appendChild(nodeContent1);
        node.appendChild(nodeContent2);
        node.appendChild(nodeContent3);
        table2.appendChild(node);
        nodeContent1.innerHTML = mitglieder[2].name;
        nodeContent2.innerHTML = mitglieder[2].vorname;
        nodeContent3.innerHTML = mitglieder[2].email;
        flag2 = true;
    }
}

function removeRow(){
    let table2 = document.getElementById("table2"); // indicates which table
    
    for (var i = 0 ; i < table2.rows.length; i++) { // table rows
        for (var j = 0; j < table2.rows[i].cells.length; j++) { // table columns
            if(rIndex === 1) { // if first row, which is the element [0] of the array
                if(table2.rows[i].cells[j].innerHTML === "Young"){ // finds the exact name
                        document.getElementById("table2").deleteRow(i); //delete the row if the name is there
                        flag0 = false; // set the flag so you can press add without reloading the page
                        break;
                }
            }else if(rIndex === 2) {
                if(table2.rows[i].cells[j].innerHTML === "Old"){
                        document.getElementById("table2").deleteRow(i);
                        flag1 = false;
                        break;
                }
            }else if(rIndex === 3) {
                if(table2.rows[i].cells[j].innerHTML === "Doe"){
                        document.getElementById("table2").deleteRow(i);
                        flag2 = false;
                        break;
                }
            }
        }
    }
}