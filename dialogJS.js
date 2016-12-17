// Get the modal
var modal = ["id011","id01","id107", "id111", "id213" , "id304" , "id301-1","id301-2","id301-3","idr1","idr2"];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var getID = event.target.id;
    //alert(event.target.className);
    /*if (getID == "id01" || getID=="id107" || getID=="id111" || getID=="id213" ) {
       document.getElementById(getID).style.display='none';
    }*/
    for(var i=0;i<modal.length;i++){
        if(modal[i]==getID){
            document.getElementById(getID).style.display='none';
            if(getID=="id01"){
                document.getElementById("ames").innerHTML="";
            }
            break;
        }
    }
    //alert(event.target.className);
  

    var evt = event.target;
     
   /* if(evt.className=="tableT"){
        var set = document.getElementById(evt.id);
        //alert("asdsad");
        if($(evt).val()=="ticked"){
            $(evt).html('');
            $(evt).val('unticked');
           
        }else{
             $(evt).html('<img  src="img/tick.png" width=35px height=35px></img>');
             $(evt).val('ticked');
        }
    }*/
    //ticktick();
    var checkselectday = "";
    if(evt.className=="tableT"){
       // alert("gg");
       var dg = document.getElementById(evt.id);
        if(dg.value=="ticked"){
            dg.innerHTML = "";
            dg.value = "unticked";
        }
        else{
            dg.innerHTML = "&#10004;";
            dg.value = "ticked";
        }

    }
    //alert(evt.className+" "+evt.value);
    
    if(evt.id=="days"){
        $("table").fadeOut(10);
        for(var i=0;i<54;i++){
            if( $('#'+idAllRoom[i]).hasClass("cantTick") && (i!=40) && (i!=39) && i!=15 && i!=13){
                //$('#'+idAllRoom[i]).attr("class","tableT");
                $('#'+idAllRoom[i]).addClass("tableT");
                //$('#'+idAllRoom[i]).val("unticked");
                $('#'+idAllRoom[i]).removeClass("cantTick");
                $('#'+idAllRoom[i]).val("unticked");
            // alert("abc");
            } 
            else if(i==39 || i==40 || i==13 || i==15){
                $('#'+idAllRoom[i]).removeClass("tableT");
                 $('#'+idAllRoom[i]).addClass("cantTick");
            }
            /*$('#'+idAllRoom[i]).html('');
            $('#'+idAllRoom[i]).val("unticked");*/
        }
        //$('.tableTD').load();
         
        gd = getDay();
        loadData();  
        $("table").fadeIn();
    }
 
}

var idtemp = "";
var check = false;
$(document).keyup(function(e) {
     if (e.keyCode == 27 && check==true) { // escape key maps to keycode `27`
        document.getElementById(idtemp).style.display='none';
        if(getID=="id01"){
            document.getElementById("ames").innerHTML="";
        }
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

function clog(val){
    
    document.getElementById(val).style.display='block';
    idtemp = val;
    for(var j=0;j<modal.length;j++){
        if(modal[j]==val){
            check=true;
            break;
        }
    }
    /*check session here*/
}

