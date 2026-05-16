import { getProductById, getLoggedUserInfo, removeProduct } from "./product-detail-model.js";
import { buildProductDetail, buildRemoveProductButton, buildEmptyProductDetail, buildErrorProductDetail } from "./product-detail-view.js";

export const productDetailController = async (productDetailContainer) => {
  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id");

  if (!productId) {
    window.location = '/';
    return;
  }

  try {

    productDetailContainer.dispatchEvent(new CustomEvent('loadProductStarted'));

    const product = await getProductById(productId);
    
    productDetailContainer.innerHTML = buildProductDetail(product);
    await handleUserActions(product, productDetailContainer);

  } catch (error) {
    if (error.message === '404') {
      productDetailContainer.innerHTML = buildEmptyProductDetail();
    } else {
      productDetailContainer.innerHTML = buildErrorProductDetail();
      // Disparamos evento de error
      productDetailContainer.dispatchEvent(new CustomEvent('productActionFailed', {
        detail: { message: error.message, type: 'error' }
      }));
    }
  } finally {

    productDetailContainer.dispatchEvent(new CustomEvent('loadProductFinished'));
  }
}

const handleUserActions = async (product, productDetailContainer) => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const loggedUser = await getLoggedUserInfo();
      
      if (loggedUser.id === product.userId) {
        const removeButton = buildRemoveProductButton();
        productDetailContainer.appendChild(removeButton);
        
        removeButton.addEventListener('click', () => {
          confirmRemoveProduct(product.id, productDetailContainer);
        });
      }
    } catch (error) {
      productDetailContainer.dispatchEvent(new CustomEvent('productActionFailed', {
        detail: { message: 'Error al verificar la identidad del vendedor', type: 'error' }
      }));
    }
  }
}

const confirmRemoveProduct = async (productId, productDetailContainer) => {
  const shouldRemove = window.confirm('¿Realmente quieres eliminar este anuncio?');

  if (shouldRemove) {
    try {
      await removeProduct(productId);
      window.location = '/'; //Redirreción
    } catch (error) {
      productDetailContainer.dispatchEvent(new CustomEvent('productActionFailed', {
        detail: { message: error.message, type: 'error' }
      }));
    }
  }
}