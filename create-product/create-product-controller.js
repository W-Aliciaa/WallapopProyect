import { createProduct, uploadImage } from "./create-product-model.js";

export const createProductController = (formContainer) => {
  const form = formContainer.querySelector('#create-product-form')

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    
    const name = formData.get('name')
    const description = formData.get('description')
    const price = formData.get('price')
    const transactionType = formData.get('transactionType')
    const photoInput = form.querySelector('#product-photo')

    try {

      const startEvent = new CustomEvent('productCreationStarted')
      formContainer.dispatchEvent(startEvent);

      let photoUrl = "";

      // Si el usuario ha seleccionado un archivo, se sube primero
      if (photoInput.files.length > 0) {
        const photoFile = photoInput.files[0];
        photoUrl = await uploadImage(photoFile);
      }

      // Se crea el producto con los datos y la URL de la imagen (si hay)
      await createProduct(name, description, price, transactionType, photoUrl);
      
      const successEvent = new CustomEvent('productCreated', {
        detail: {
          message: 'Anuncio publicado correctamente',
          type: 'success'
        }
      })
      formContainer.dispatchEvent(successEvent);

    } catch (error) {
      // ESTADO: Error
      const errorEvent = new CustomEvent('productCreationFailed', {
        detail: {
          message: error.message || 'Error al crear el anuncio',
          type: 'error'
        }
      })
      formContainer.dispatchEvent(errorEvent);
    } finally {

      const finishEvent = new CustomEvent('productCreationFinished');
      formContainer.dispatchEvent(finishEvent);
    }
  })
}