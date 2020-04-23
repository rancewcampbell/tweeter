// scroll to top of page when scroll button clicked
$(document).ready(() => {
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 50) {
        $('#scroll-button').fadeIn(200);
    } else {
        $('#scroll-button').fadeOut(200);
    }
  });
  
  $('#scroll-button').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
