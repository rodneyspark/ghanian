var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

var  femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function ghanian(){
    var d = document.getElementById("d").value
    alert (d)
    var cc = parseInt(year.slice(0,2));
    Var yy = parseInt(year.slice(2,4));     
    
    alert (d)
 (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7

}