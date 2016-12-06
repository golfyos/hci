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
    
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    $('#datep').val("0"+day+"/"+month+"/"+year);

    
});

window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0;};

$(function() {
    $('.tableT').click( function() {
        if($(this).val() =="ticked"){
             $(this).html('');
             $(this).val('unticked');
        }
        else{
             $(this).html('<img src="img/tick.png" width=35px height=35px></img>');
             $(this).val('ticked');
        }
         
    });
});


$(function() {
    $('body').click( function(e) {
        if(!$(e.target).hasClass("tcal")){
            f_tcalCancel ();
        }
    });
});



/*$(function() {
    $('.cantTick').click( function() {
        $(this).addClass('tableT');
        $(this).removeClass('cantTick');
    });
});*/

