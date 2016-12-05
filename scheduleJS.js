$(document).ready(function () {
  //$('.gAll').show();
  //$('#option1').show();
  $('#selectRoom').change(function () {
      if($(this).val()=="all"){
          $('.gAll').fadeIn(1100);
      }
      else{
         $('.gAll').hide();
         $('#'+$(this).val()).fadeIn(1000);
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