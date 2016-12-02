// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    //var check = document.getElementById(event.target.id);
    var getID = event.target.id;
    if (getID == "id01" || getID=="id02") {
       document.getElementById(getID).style.display='none';
    }

}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        document.getElementById('id01').style.display='none';
        document.getElementById('id02').style.display='none';
     }
});

function cc(val){
    document.getElementById('id02').style.display='block';
    document.getElementById("headerD").innerHTML = "ห้อง " + val;
}

