function animateScroll(window, hideme) {
  // have an initial evaluation in the event of a refresh...
  let aboutMeIsVisible = false;
  window.scroll(function(){
    /* Check the location of each desired element */
    hideme.each( function(element) {

        const el = $(this);
        const elClass = el.attr("class");
        const isAboutMe = elClass.indexOf('about-me') > -1;

        if (isAboutMe && !aboutMeIsVisible || !isAboutMe && aboutMeIsVisible) {

          const object_target_position = el.position().top + 120;

          const bottom_of_window = window.scrollTop() + window.height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > object_target_position ) {

            el.animate({'opacity':'1'},500);

            if (isAboutMe) {
              aboutMeIsVisible = true;
            }

            else {
              window.unbind('scroll');
            }

          }

        }  

    });

  }); 

}

function handleScrollToTop(window, anchor) {
  anchor.on('click', function(e) {
    window.scrollTo(0, 1500);
  });
}

$(document).ready(function(){

  const windowGlobal = $(window);

  animateScroll(windowGlobal, $('.hideme'));

  handleScrollToTop(windowGlobal, $('.js-go-to-top'));

});