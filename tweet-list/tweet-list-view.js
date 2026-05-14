  

export const buildTweet = (tweet) => {

  const newTweet = document.createElement('a');
  newTweet.classList.add('tweet-link')
  newTweet.setAttribute('href', `tweet-detail.html?id=${tweet.id}`)

  newTweet.innerHTML = `
    <div class="tweet">
      <h4>${tweet.handler} - ${tweet.createdAt}</h4>
      <p>${tweet.message}</p>
      <p>${tweet.likes}</p>
    </div>`;

  return newTweet;

  /**
   * 
   {
    "content": "prueba creación tweet",
    "userId": 1,
    "updatedAt": "2026-05-04T19:34:52.628Z",
    "id": 1
  }
   */
}