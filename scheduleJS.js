
var timeTo =["930t","1100t","1230t","1330t","1500t","1630t","1800t"];
var timeTo2 =["930t2","1100t2","1230t2","1330t2","1500t2","1630t2","1800t2"];

$(document).ready(function () {
  //$('.gAll').show();
  //$('#option1').show();
  $('#selectRoom').change(function () {
      if($(this).val()=="all"){
          $('.gAll').fadeIn(800);
      }
      else{
         $('.gAll').hide();
         $('#'+$(this).val()).fadeIn(900);
      }
  })
    

    $('.selectTime').change(function(){
        if($(this).val() =="800f"){
            //alert('asdsad');
            for(var i=0;i<timeTo.length;i++){
                $("#"+timeTo[i]).show();
            }
        }
        else if($(this).val() =="930f"){
            for(var i=0;i<timeTo.length;i++){
                if(i<1) $("#"+timeTo[i]).hide();
                else  $("#"+timeTo[i]).show();
            }
            $(".selectTimeTo").val("1100t");  
        }
        else if($(this).val() =="1100f"){
            for(var i=0;i<timeTo.length;i++){
                if(i<2) $("#"+timeTo[i]).hide();
                else  $("#"+timeTo[i]).show();
            }
            $(".selectTimeTo").val("1230t");  
        }
        else if($(this).val() =="1330f"){
            for(var i=0;i<timeTo.length;i++){
                if(i<4) $("#"+timeTo[i]).hide();
                else  $("#"+timeTo[i]).show();
            }
            $(".selectTimeTo").val("1500t");  
        }
        else if($(this).val() =="1500f"){
            for(var i=0;i<timeTo.length;i++){
                if(i<5) $("#"+timeTo[i]).hide();
                else  $("#"+timeTo[i]).show();
            }
            $(".selectTimeTo").val("1630t");  
        }
        else if($(this).val() =="1630f"){
            for(var i=0;i<timeTo.length;i++){
                if(i<6) $("#"+timeTo[i]).hide();
                else  $("#"+timeTo[i]).show();
            }
            $(".selectTimeTo").val("1800t");  
        }
    })
    
    $('.selectTime2').change(function(){
        if($(this).val() =="800f2"){
            //alert('asdsad');
            for(var i=0;i<timeTo2.length;i++){
                $("#"+timeTo2[i]).show();
            }
        }
        else if($(this).val() =="930f2"){
            for(var i=0;i<timeTo2.length;i++){
                if(i<1) $("#"+timeTo2[i]).hide();
                else  $("#"+timeTo2[i]).show();
            }
            $(".selectTimeTo2").val("1100t2");  
        }
        else if($(this).val() =="1100f2"){
            for(var i=0;i<timeTo2.length;i++){
                if(i<2) $("#"+timeTo2[i]).hide();
                else  $("#"+timeTo2[i]).show();
            }
            $(".selectTimeTo2").val("1230t2");  
        }
        else if($(this).val() =="1330f2"){
            for(var i=0;i<timeTo2.length;i++){
                if(i<4) $("#"+timeTo2[i]).hide();
                else  $("#"+timeTo2[i]).show();
            }
            $(".selectTimeTo2").val("1500t2");  
        }
        else if($(this).val() =="1500f2"){
            for(var i=0;i<timeTo2.length;i++){
                if(i<5) $("#"+timeTo2[i]).hide();
                else  $("#"+timeTo2[i]).show();
            }
            $(".selectTimeTo2").val("1630t2");  
        }
        else if($(this).val() =="1630f2"){
            for(var i=0;i<timeTo2.length;i++){
                if(i<6) $("#"+timeTo2[i]).hide();
                else  $("#"+timeTo2[i]).show();
            }
            $(".selectTimeTo2").val("1800t2");  
        }
    })

   


    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    var year = dateObj.getUTCFullYear();
    $('#datep').val(""+day+"/"+month+"/"+year);

    //loadData();
    
    
});




var idAllRoom = ["107-800930","107-9301100","107-11001230","107-13301500","107-15001630","107-16301800",
                "111-800930","111-9301100","111-11001230","111-13301500","111-15001630","111-16301800",
                "213-800930","213-9301100","213-11001230","213-13301500","213-15001630","213-16301800",
                "3011-800930","3011-9301100","3011-11001230","3011-13301500","3011-15001630","3011-16301800",
                "3012-800930","3012-9301100","3012-11001230","3012-13301500","3012-15001630","3012-16301800",
                "3013-800930","3013-9301100","3013-11001230","3013-13301500","3013-15001630","3013-16301800",
                "304-800930","304-9301100","304-11001230","304-13301500","304-15001630","304-16301800",
                "r1-800930","r1-9301100","r1-11001230","r1-13301500","r1-15001630","r1-16301800",
                "r2-800930","r2-9301100","r2-11001230","r2-13301500","r2-15001630","r2-16301800"
                ];    

/*window.onclick = function(e){
    if(e.target.id=="days"){
        for(var i=0;i<54;i++){
            if( $('#'+idAllRoom[i]).hasClass("cantTick")){
                $('#'+idAllRoom[i]).addClass("tableT");
                $('#'+idAllRoom[i]).removeClass("cantTick");
            }   
        }
        gd = getDay();
        loadData();
        
    }
};*/
var gd = "";
function loadData(){
    
    //var tempName = document.getElementsBy("tableTD");
    //if(dd){
        


        //var ID = $(this).attr('id');
        //$('.show_more').hide();
        //$('.loding').show();
        $.ajax({
            type:'POST',
            url:'loadData.php',
            data:gd,
            success:function(html){
                //$('#show_more_main'+ID).remove();
                $('table').hide();
                
            }
        }); 

       /* $.ajax({
                type: 'post',
                url: 'loadData.php',
                data: {
                     dayID:gd
                },
            success: function (response) {
                // We get the element having id of display_info and put the response inside it
                $( '#tableTD' ).html(response);
            }
        });*/
        
    //}
    
}

window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};


/*$(function() {
    $('.tableT').click( function() {
       // alert("gg");
        if($(this).val() =="ticked"){
             $(this).html('');
             $(this).val('unticked');
        }
        else{       
             $(this).html('&#10004;');
             $(this).val('ticked');
        }
         
    });
});*/


$(function() {
    $('body').click( function(e) {
        if(!$(e.target).hasClass("tcal")){
            f_tcalCancel ();
        }
    });
});



