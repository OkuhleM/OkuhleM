
var rIndex,
table = document.getElementById("table");
 



// add row

function addHtmlTableRow() {
  
  var newRow = table.insertRow(table.length),
  cell1 = newRow.insertCell(0),
  cell2 = newRow.insertCell(1),
  cell3 = newRow.insertCell(2),
  cell4 = newRow.insertCell(3),
  cell5 = newRow.insertCell(4),
  cell6 = newRow.insertCell(5),
  names = document.getElementById("names").value,
  surnames = document.getElementById("surnames").value,
  position = document.getElementById("position").value,
  number = document.getElementById("number").value,
  salary = document.getElementById("salary").value;
  
  

  cell1.innerHTML = names;
   cell2.innerHTML = surnames;
   cell3.innerHTML = position;
    cell4.innerHTML = number;
     cell5.innerHTML = salary;
cell6.innerHTML = `<p id="results"></p>`;



     // calls the function to see the event to the new row
     selectedRowToInput()
}

// get selected row

function selectedRowToInput() {
  
  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      rIndex = this.rowIndex;
      document.getElementById("names").value = this.cells[0].innerHTML;
      document.getElementById("surnames").value = this.cells[1].innerHTML;
      document.getElementById("position").value = this.cells[2].innerHTML;
      document.getElementById("number").value = this.cells[3].innerHTML;
     
      
    };
  }
}
selectedRowToInput()

function editHtmlSelectedRows() {
  
  
  var names = document.getElementById("names").value;
  var surnames = document.getElementById("surnames").value;
  var position = document.getElementById("position").value;
  var number = document.getElementById("number").value;
  var salary = document.getElementById("salary").value;

  table.rows[rIndex].cells[0].innerHTML = names;
  table.rows[rIndex].cells[1].innerHTML = surnames;
  table.rows[rIndex].cells[2].innerHTML = position;
  table.rows[rIndex].cells[3].innerHTML = number;
  table.rows[rIndex].cells[4].innerHTML = salary;
 
cell1.innerHTML
cell2.innerHTML
cell3.innerHTML
cell4.innerHTML
cell5.innerHTML

}


function removeSelectedRow() {
  table.deleteRow(rIndex);

   document.getElementById("names").value = "";
   document.getElementById("surnames").value = "";
   document.getElementById("position").value = "";
   document.getElementById("number").value = "";
   document.getElementById("salary").value = "";
}

function calcSalary(td) {
 var wage = parseFloat(document.getElementById('salary').value);
 var hours = parseFloat(document.getElementById('txt_hours').value);
 var calculate = wage * hours * 52;
 console.log(td);
 document.getElementById('results').innerHTML = calculate;
//  document.getElementById("names").value = "";
//    document.getElementById("surnames").value = "";
//    document.getElementById("position").value = "";
//    document.getElementById("number").value = "";
   document.getElementById("salary").value = "";
}