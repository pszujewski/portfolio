  // Smooth Scrolling Snippet from CSS Tricks
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  //'a[href*="#"]:not([href="#"])'
function scroll(selector) {
    $(selector).on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });  

$(document).ready(function(){
  scroll('a[href*="#"]:not([href="#"])');
});