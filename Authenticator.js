
do{
let x = 3;
function Authenticate() {
    var Password = document.getElementById("Password").value;
    var y = document.getElementById("eqn");
    if(Password == "Bankole"){
        document.getElementById("Grant").innerHTML="Access Granted";
        
        
    }
    else{
        x-=1;
        if(x==0) {
            alert("3 Wrong Input");
            x = 3;
        }
        document.getElementById("denied").innerHTML="Access Denied Try again";
    }
    setTimeout(function(){document.getElementById("Grant").innerHTML="";},3000);
    setTimeout(function(){document.getElementById("denied").innerHTML="";},1000);
}
}while(x>=0);