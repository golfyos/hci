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
