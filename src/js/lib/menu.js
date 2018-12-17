$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
    
// sub-menu 

    $('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('header .burger').is(':visible'))return;
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
	});
    
}); 