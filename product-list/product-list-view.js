  

export const buildProduct = (product) => {

  const productLink = document.createElement('a');
  productLink.classList.add('product-link')
  productLink.setAttribute('href', `product-detail.html?id=${product.id}`)

  const photoHtml = product.photo 
    ? `<img src="${product.photo}" alt="${product.name}" class="product-photo">` 
    : '<div class="no-photo">Sin foto</div>';

  productLink.innerHTML = `
    <div class="product-card">
      ${photoHtml}
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Precio:</strong> ${product.price}€</p>
      <p><strong>Tipo:</strong> Anuncio de ${product.transactionType}</p>
      <small>Vendedor: ${product.user.username}</small>
    </div>
  `;

  return productLink;
}

export const buildEmptyProductList = () => {
  return `<div class="empty-state"><p>No hay anuncios disponibles en este momento. ¡Sé el primero en subir uno!</p></div>`;
}

export const buildErrorProductList = () => {
  return `<div class="error-state"><p>Lo sentimos, ha ocurrido un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.</p></div>`;
}