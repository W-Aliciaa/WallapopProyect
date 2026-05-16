

export const getProducts = async () => {

  const response = await fetch('http://localhost:8000/api/products?_expand=user');

  // Si la respuesta de la API no es correcta, se lanza un error
  if (!response.ok) {
    throw new Error('No se han podido recuperar los anuncios');
  }
  
  const products = await response.json();
  
  return products;
}

