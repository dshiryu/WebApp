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
    },
    {
    name : "Doe",
    vorname: "Jone",
    email : "jone@doe.org"
    }
   ];

let button1 = "<button>Add</button>";
let button2 = "<button>Remove</button>";


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
    }
}

/*Another way to build the table but using "appendChild()"*/
function buildTable2(){
    for (let i = 0; i < mitglieder.length; i++){
        let table = document.getElementById("table1");
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
        onclick="add(this)">  \n\ <input type="button" value="remove" onclick="remove(this)">';
    }
}
//just need to call one function
buildTable2();


// Add + Remove rows functions

//get value of the a cell in the same row with a button
function getCellValue(button,cellNo){
    let row = button.parentNode.parentNode; //get row which is parent of parent of the button
    let content = row.children[cellNo].innerHTML; //get content of the cell which is a child of this row
    return content;
}

//add function 
function add(button){
    var rowNo = document.getElementById("table2").rows.length;
    if ((findRowtoRemove(button) == 0 && rowNo != 1)||(rowNo ==1)){ //this prevent adding one member twice
    let table = document.getElementById("table2");
    let node = document.createElement("tr");
    let nodeContent1 = document.createElement("td");
    let nodeContent2 = document.createElement("td");
    let nodeContent3 = document.createElement("td");
    node.appendChild(nodeContent1);
    node.appendChild(nodeContent2);
    node.appendChild(nodeContent3);
    table.appendChild(node);
    nodeContent1.innerHTML = getCellValue(button, 0);// use getCellValue to insert the content of cells corresponding with the button
    nodeContent2.innerHTML = getCellValue(button, 1);
    nodeContent3.innerHTML = getCellValue(button, 2);
    }
}

/*
When you click remove, you need to detect the row in 2nd table to remove. 
This function return the number of row in 2nd table to remove
*/
function findRowtoRemove(button){
    let rowToRemove = 0;
    var rowNo = document.getElementById("table2").rows.length;
    for (let i = 0; i < rowNo; i++){
        if(document.getElementById("table2").rows[i].cells[1].innerHTML == getCellValue(button,1)){
            rowToRemove = i;
        }
    }
    return rowToRemove;
}

//remove function when you now the number of row to remove
function remove(button){
    if (findRowtoRemove(button) != 0){
    let rowToRemove = findRowtoRemove(button);
    document.getElementById("table2").deleteRow(rowToRemove);
    }
}


/*function removeChild(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}*/

