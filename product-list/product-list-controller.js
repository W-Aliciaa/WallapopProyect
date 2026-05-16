import { getProducts } from "./product-list-model.js"
import { buildProduct, buildEmptyProductList, buildErrorProductList } from "./product-list-view.js";


export const productListController = async (productsContainer) => {
  productsContainer.innerHTML = ''

  try {
    const loadProductsStartedEvent = new CustomEvent("loadProductsStarted")
    productsContainer.dispatchEvent(loadProductsStartedEvent)

    const products = await getProducts();

    if (products.length === 0) {
      //Si no hay productos
      productsContainer.innerHTML = buildEmptyProductList();
    } else {
      showProducts(products, productsContainer);
    }
  } catch (error) {

    productsContainer.innerHTML = buildErrorProductList();

    const loadProductsFailedEvent = new CustomEvent("loadProductsFailed", {
      detail:{
        message: 'No ha sido posible obtener los productos',
        type: 'error'
      }
    })
    productsContainer.dispatchEvent(loadProductsFailedEvent)
    
  } finally {
    const loadProductsFinishedEvent = new CustomEvent("loadProductsFinished")
    productsContainer.dispatchEvent(loadProductsFinishedEvent)
  }

}

const showProducts = (products, productsContainer) => {
  products.forEach((product) => {
    const newProductElement = buildProduct(product);
    productsContainer.appendChild(newProductElement)
  });
}
