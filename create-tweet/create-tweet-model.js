export const createTweet = async (content) => {

  const url = 'http://localhost:8000/api/tweets2'
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    },
    body: JSON.stringify({
      content,
      likes: 0
    })
  })
}