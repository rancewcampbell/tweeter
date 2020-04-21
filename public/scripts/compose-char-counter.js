$(document).ready(() => {
  $('#tweet-text').keyup(function(event) {
    let counterVal = 140 - $(this).val().length;
    const $charCounter = $(this).siblings('.counter');
    $charCounter.val(counterVal);
    $charCounter.toggleClass('error', counterVal < 0);
  });
});