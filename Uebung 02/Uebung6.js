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
        node.appendChild(nodeContent1);
        node.appendChild(nodeContent2);
        node.appendChild(nodeContent3);
        table.appendChild(node);
        nodeContent1.innerHTML = mitglieder[i].name;
        nodeContent2.innerHTML = mitglieder[i].vorname;
        nodeContent3.innerHTML = mitglieder[i].email;
    }
}

//just need to call one function
buildTable2();
