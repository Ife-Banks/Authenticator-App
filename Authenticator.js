
do{
let x = 3;
function Authenticate() {
    var Password = document.getElementById("Password").value;
    var y = document.getElementsByClassName('input');
    var inp = y[0];
    if(Password == "Bankole"){
        document.getElementById("Grant").innerHTML="Access Granted";
        
        
    }
    else{
        x-=1;
        if(x==0) {
            alert("Try Password After 1min");
            inp.style.cursor ="not-allowed";
            
            x = 3;
        }
        document.getElementById("denied").innerHTML="Access Denied Try again";
    }
    setTimeout(function(){document.getElementById("Grant").innerHTML="";},3000);
    setTimeout(function(){document.getElementById("denied").innerHTML="";},1000);
    setTimeout(function(){
        inp.style.cursor="default";
    },60000);
}
}while(x>=0);