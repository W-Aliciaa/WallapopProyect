export const buildProductDetail = (product) => {
  const photoHtml = product.photo 
    ? `<img src="${product.photo}" alt="${product.name}" class="product-detail-photo">` 
    : '<div class="no-photo">Sin foto</div>';

  return `
    <div class="product-detail-card">
      ${photoHtml}
      <h1>${product.name}</h1>
      <p class="product-detail-description">${product.description}</p>
      <p class="product-detail-price"><strong>Precio:</strong> ${product.price}€</p>
      <p class="product-detail-type"><strong>Tipo de anuncio:</strong> Artículo en ${product.transactionType}</p>
      <div class="product-detail-seller">
        <small>Publicado por: <strong>${product.user.username}</strong></small>
      </div>
    </div>
  `;
}

// Si el usuario es el dueño
export const buildRemoveProductButton = () => {
  const removeProductButton = document.createElement('button');
  removeProductButton.textContent = 'Eliminar anuncio';
  removeProductButton.classList.add('btn-delete');

  return removeProductButton;
}

// VACÍO
export const buildEmptyProductDetail = () => {
  return `<div class="empty-state"><p>El anuncio que buscas no existe o ha sido retirado.</p></div>`;
}

// Fallo de la API
export const buildErrorProductDetail = () => {
  return `<div class="error-state"><p>Lo sentimos, ha ocurrido un error al cargar la información del anuncio.</p></div>`;
}