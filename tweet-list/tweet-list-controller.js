import { getTweets } from "./tweet-list-model.js"
import { buildTweet } from "./tweet-list-view.js";


export const tweetListController = async (tweetContainer) => {
  tweetContainer.innerHTML = ''

  try {
    const tweetsLoadingEvent = new CustomEvent("loadTweetsStarted")
    tweetContainer.dispatchEvent(tweetsLoadingEvent)
    const tweets = await getTweets();
    showTweets(tweets, tweetContainer);
  } catch (error) {
    
    const tweetsFailedEvent = new CustomEvent("loadTweetsFailed", {
      detail:{
        message: 'no ha sido posible obtener tweets',
        type: 'error'
      }
    })
    tweetContainer.dispatchEvent(tweetsFailedEvent)
    
  } finally {
    const tweetsLoadedEvent = new CustomEvent("loadTweetsFinished")
    tweetContainer.dispatchEvent(tweetsLoadedEvent)
  }

  

}

const showTweets = (tweets, tweetContainer) => {
  tweets.forEach((tweet) => {
    const newTweetElement = buildTweet(tweet);
    tweetContainer.appendChild(newTweetElement)
  });
}
