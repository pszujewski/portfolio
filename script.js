function handleScrollToTop(window, anchor) {
  anchor.on('click', function(e) {
    window.scrollTo(0, 1500);
  });
}

$(document).ready(function(){

  const windowGlobal = $(window);

  handleScrollToTop(windowGlobal, $('.js-go-to-top'));

});