/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const createTweetElement = function(tweetObj) {
  const tweetTemplate = `
    <article class="tweet">
      <header>
        <img src="${tweetObj.user.avatars}" alt="profile-picture">
        <p>${tweetObj.user.name}</p>
        <p class="handle">${tweetObj.user.handle}</p>
      </header>
      <p class="tweet-body">${tweetObj.content.text}</p>
      <footer>
        <p>${tweetObj.created_at}</p>
        <div>
          <img src="/images/flag.png" alt="flag tweet">
          <img src="/images/retweet.png" alt="repost">
          <img src="/images/heart.png" alt="like tweet">
        </div>
      </footer>
    </article>
  `
  return tweetTemplate;
}


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.