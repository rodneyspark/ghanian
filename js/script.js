var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var  femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function ghanian(){
    var d = document.getElementById("date").value;
    var day = d.split("-") 
    var year = day[0]
    var mm =parseInt(day[1])
    var dd =parseInt(day[2]) 
    var cc = parseInt(year.slice(0,2));
    var yy = parseInt(year.slice(2,4));     

    var days =Math.floor( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd)%7)
    var gender = document.getElementById("gender").value;

    if (gender==="female"){
      alert("Born on " + weekDays[days]+ " your name is " + femaleNames[days])  
    }
    else if (gender==="male"){
        alert("Born on " + weekDays[days]+ " your name is " + maleNames[days])

    }
    else {
        alert("invaid input")

    }

}