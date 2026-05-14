

export const getTweets = async () => {
  // mostrar ruleta --> NO porque el modelo se encarga de obtener datos, 
  // no de gestionar el DOM

  const response = await fetch('http://localhost:8000/api/tweets');
  const tweets = await response.json();
  
  // guardar la respuesta en una variable y devolverla
  return tweets;
}

//2?_expand=user