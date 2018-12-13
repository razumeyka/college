@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/slider.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('.header2 .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
    
// sub-menu 1280
    
    if ( $(window).width() > 1279 ) {
        $('.menu li').mouseenter(function () { 
            $(this).find('.sub-menu').fadeIn(200).addClass('active'); 
        });

        $('.menu li').mouseleave(function () { 
            $(this).find('.sub-menu').fadeOut(200).removeClass('active'); 
        });
    };

// sub-menu 1279

    $('.menu li.menu-item-has-children>a').click(function(e){
        if($('.burger').is(':visible')){
            e.preventDefault();
            $(this).closest('li').find('.sub-menu').slideToggle(300);
        }
    }); 

// hidden text
    $(".info-block__second_part").slideUp(0);
    $(".more-info").click(function(event){
        event.preventDefault();
        $('.info-block__second_part').slideDown(500);
		$('.more-info').toggleClass('more-info_active');
    });
}); 