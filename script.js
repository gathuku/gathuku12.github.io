
var side=document.getElementById("sidebar");
function close(){
    side.style.display="none";

}

function open(){
    if(side.style.display==="block"){
        side.style.display="none";
    }else{
        side.style.display="block";
    }
}