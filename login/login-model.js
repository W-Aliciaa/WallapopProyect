export const loginUser = async (email, password) => {
  
  const url = 'http://localhost:8000/auth/login'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: email,
      password
    })
  })

  const data = await response.json()

  if (!response.ok) {  
    // disparar error
    throw new Error(data.message)
  } else {
    return data.accessToken;
  }
}