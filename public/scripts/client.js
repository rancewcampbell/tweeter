/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  const createTweetElement = function(tweetObj) {
    const date = new Date(tweetObj.created_at);
    const time = date.toLocaleTimeString();
    const tweetTemplate = `
      <article class="tweet">
        <header>
          <img src="${tweetObj.user.avatars}" alt="profile-picture">
          <p>${tweetObj.user.name}</p>
          <p class="handle">${tweetObj.user.handle}</p>
        </header>
        <p class="tweet-body">${escape(tweetObj.content.text)}</p>
        <footer>
          <p>${date.toDateString()}, ${time}</p>
          <div>
            <img src="/images/flag.png" alt="flag tweet">
            <img src="/images/retweet.png" alt="repost">
            <img src="/images/heart.png" alt="like tweet">
          </div>
        </footer>
      </article>
    `;
    return tweetTemplate;
  };
      
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweetsArray) {
    $('#tweets-container').empty();
    for (const tweet of tweetsArray.reverse()) {
      const $newTweet = createTweetElement(tweet);
      $('#tweets-container').append($newTweet);
    }
  };
  
  const loadTweets = function() {
    $('#error-message').slideUp(200);
    $.get('/tweets')
      .then(renderTweets);
  };

  // post tweet to server
  $('#tweet-form').submit(function(event) {
    event.preventDefault();
    const textArea = $('#tweet-text');
    const tweetLength = textArea.val().length;
    if (!tweetLength) {
      errorAppear("You didn't enter anything!");
    } else if (tweetLength > 140) {
      errorAppear('That tweet is way too long! Keep it below 140 characters please :)');
    } else {
      const data = $(this).serialize();
      $.post('/tweets', data)
        .then(loadTweets);
      textArea.val('');
      $('.counter').val('140');
    }
  });
  
  const errorAppear = function(message) {
    $('#error-message').slideDown(200);
    $('#error-message').text(message);
  };

  loadTweets();
});
