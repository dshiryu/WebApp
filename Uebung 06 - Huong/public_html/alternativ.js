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
        let table = document.getElementById("members_table");
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = mitglieder[i].name;
        cell2.innerHTML = mitglieder[i].vorname;
        cell3.innerHTML = mitglieder[i].email;
        cell4.innerHTML = '<input type="button" value="add" \n\
            onclick="addToGroup(this)">  \n\
                <input type="button" value="remove" onclick="removeRow(this)">';
    }
}
buildTable();


function addToGroup(){
    let table1 = document.getElementById("members_table");
    let table2 = document.getElementById("group_table");
    let row = table2.insertRow(table2.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML.onclick = this.cells[0].innerHTML;
    cell2.innerHTML.onclick = this.cells[1].innerHTML;
    cell3.innerHTML.onclick = this.cells[2].innerHTML;
    
    
}