export const uploadImage = async (imageFile) => {
  const url = 'http://localhost:8000/upload';
  const token = localStorage.getItem('token');
  
  const formData = new FormData();
  formData.append('file', imageFile);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData 
  });

  if (!response.ok) {
    throw new Error('Error al subir la imagen');
  }

  const data = await response.json();
  return data.path; 
};

export const createProduct = async (name, description, price, transactionType, photoUrl) => {
  const url = 'http://localhost:8000/api/products';
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
      price: Number(price), //se asegura que el precio es un numero
      transactionType,
      photo: photoUrl, //vacío si no hay foto
      //sparrest se encarga de la fecha
    })
  });

  if (!response.ok) {
    throw new Error('No se ha podido guardar el anuncio en el servidor');
  }
};