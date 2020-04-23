// pulls down compose tweet form
$(document).ready(() => {
  $('nav button').click(function() {
    $('.new-tweet').slideToggle(750);
    $('.new-tweet textarea').focus();
  });
});
  