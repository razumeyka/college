@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/slider.js')
@@include('./lib/menu.js')

$(document).ready(function(){

// hidden text
    $(".info-block__second-part").slideUp(0);
    $(".more-info").click(function(event){
        event.preventDefault();
        $('.info-block__second-part').slideDown(500);
		$('.more-info').toggleClass('more-info_active');
    });
}); 