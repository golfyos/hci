// Get the modal
var modal = ["id01","id107", "id111", "id213" , "id304" , "id301-1","id301-2","id301-3","idr1","idr2"];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var getID = event.target.id;
    /*if (getID == "id01" || getID=="id107" || getID=="id111" || getID=="id213" ) {
       document.getElementById(getID).style.display='none';
    }*/
    for(var i=0;i<modal.length;i++){
        if(modal[i]==getID){
            document.getElementById(getID).style.display='none';
            break;
        }
    }
}

var idtemp = "";
var check = false;
$(document).keyup(function(e) {
     if (e.keyCode == 27 && check==true) { // escape key maps to keycode `27`
        document.getElementById(idtemp).style.display='none';
        check=false;
    }
});


function cc(val){
    document.getElementById(val).style.display='block';
    idtemp = val;
    for(var j=0;j<modal.length;j++){
        if(modal[j]==val){
            check=true;
            break;
        }
    }
}

