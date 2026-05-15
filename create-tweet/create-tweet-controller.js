import { createTweet } from "./create-tweet-model.js";
import { buildTweetCreationForm } from "./create-tweet-view.js"

export const createTweetController = (createTweetContainer) => {

  const token = localStorage.getItem('token')

  if (token) {
    // muestro el form
    createTweetContainer.innerHTML = buildTweetCreationForm();
    const form = createTweetContainer.querySelector('form')

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const content = formData.get('new-tweet')

      try {
        await createTweet(content)
        const newTweetEvent = new CustomEvent('tweetCreated')
        createTweetContainer.dispatchEvent(newTweetEvent);
      } catch (error) {
        alert(error.message)        
      }

    })
  }
}