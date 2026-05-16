import { productDetailController } from "./product-detail/product-detail-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { notificationsController } from "./notifications/notification-controller.js";

const productDetailContainer = document.querySelector('.product-detail');
const spinnerContainer = document.querySelector('.spinner-container');
const notificationsContainer = document.querySelector('.notifications-container');


const { showSpinner, hideSpinner } = spinnerController(spinnerContainer);
const { showNotification } = notificationsController(notificationsContainer);


productDetailContainer.addEventListener('loadProductStarted', showSpinner);
productDetailContainer.addEventListener('loadProductFinished', hideSpinner);

productDetailContainer.addEventListener('productActionFailed', (event) => {
  showNotification(event.detail.message, event.detail.type);
});


productDetailController(productDetailContainer);