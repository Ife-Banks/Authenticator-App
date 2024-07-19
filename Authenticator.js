
do{
let x = 3;
function Authenticate() {
    var Password = document.getElementById("Password").value;
    var y = document.getElementsByClassName('input');
    var b =document.getElementById('button');
    var inp = y[0];
    if(Password == "Bankole"){
        document.getElementById("Grant").innerHTML="Access Granted";
        
        
    }
    else{
        x-=1;
        if(x==0) {
            inp.style.cursor ="not-allowed";
            b.style.display="none";
            alert("Try Password After 30sec");
            x = 3;
        }
        document.getElementById("denied").innerHTML="Access Denied Try again";
    }
    setTimeout(function(){document.getElementById("Grant").innerHTML="";},3000);
    setTimeout(function(){document.getElementById("denied").innerHTML="";},1000);
    setTimeout(function(){
        inp.style.cursor="default";
        b.style.display="block";
    },30000);
}
}while(x>=0);