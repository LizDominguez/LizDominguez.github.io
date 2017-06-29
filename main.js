/*jslint browser: true*/
/*global $, jQuery*/

jQuery(document).ready(function($){   
  
    $('a[href^="#"]').on('click', function(e) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }   
    });  
});

