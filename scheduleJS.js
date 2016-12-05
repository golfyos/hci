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

  
 
    
});

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


/*$(function() {
    $('.cantTick').click( function() {
        $(this).addClass('tableT');
        $(this).removeClass('cantTick');
    });
});*/

