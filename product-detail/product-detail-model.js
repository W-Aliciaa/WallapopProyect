export const getProductById = async (productId) => {
  const url = `http://localhost:8000/api/products/${productId}?_expand=user`;

  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('404'); // Vacío
    }
    throw new Error('No se ha podido recuperar la información del anuncio');
  }

  const data = await response.json();
  return data;
}

export const getLoggedUserInfo = async () => {
  const url = 'http://localhost:8000/auth/me';
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    throw new Error('Error al obtener los datos del usuario logado');
  }

  const data = await response.json();
  return data;
}

export const removeProduct = async (productId) => {
  const url = `http://localhost:8000/api/products/${productId}`;
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    throw new Error('No se ha podido eliminar el anuncio');
  }
}