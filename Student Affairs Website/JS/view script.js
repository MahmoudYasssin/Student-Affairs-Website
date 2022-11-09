            
    var table = document.getElementById("table"),rIndex;
                
    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            console.log(rIndex);
    
            document.getElementById("Name").value = this.cells[0].innerHTML;
            document.getElementById("ID").value = this.cells[1].innerHTML;
            document.getElementById("Department").value = this.cells[2].innerHTML;
            document.getElementById("status").value = this.cells[3].innerHTML;
        };
    }         
    // edit the row
    function editRow(){
        table.rows[rIndex].cells[0].innerHTML = document.getElementById("Name").value;
        table.rows[rIndex].cells[1].innerHTML = document.getElementById("ID").value;
        table.rows[rIndex].cells[2].innerHTML = document.getElementById("Department").value;
        table.rows[rIndex].cells[3].innerHTML = document.getElementById("status").value;
        alert("Information Updated Successfully");
    }
    
    // Data Update Table Here
    function editTableDisplay(){
        document.querySelector('.editTable').setAttribute('style', 'display: block;')
    }
    function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }