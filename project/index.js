


function birth()
{
   var birthYr= prompt("Please give you birth Year..");
    var date = new Date();
    var Year= date.getFullYear()
    
   var ageIndays = (Year-birthYr)*365;
   var h1 = document.createElement("h1")
   var answer = document.createTextNode("You are in "+ ageIndays + " years old")
   h1.setAttribute("id",'birth')
   h1.appendChild(answer);
   var getResult= document.getElementById("flex-box-result");
   getResult.appendChild(h1);
}

function dlt()
{
    document.getElementById('birth').remove();
}


