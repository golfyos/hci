$(function() {
    $('.tabs li').on('click', function() {
        var tabId = $(this).attr('data-tab');

        $('.tabs li').removeClass('current');
        $('.tab-pane').removeClass('current'); 

        $(this).addClass('current');
        $('#' + tabId).addClass('current');
    });

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