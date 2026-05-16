//ORQUESTADOR

import { notificationsController } from "./notifications/notification-controller.js";
import { sessionController } from "./session/session-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { productListController } from "./product-list/product-list-controller.js";

// el orquestador ejecutará el/los controlador/controladores

const productsContainer = document.querySelector('.products-container');
const spinnerContainer = document.querySelector('.spinner-container');
const notificationsContainer = document.querySelector('.notifications-container');
const sessionContainer = document.querySelector('.session-container');


const { showSpinner, hideSpinner } = spinnerController(spinnerContainer)
productsContainer.addEventListener("loadProductsStarted", showSpinner)
productsContainer.addEventListener("loadProductsFinished", hideSpinner)

const { showNotification } = notificationsController(notificationsContainer)

productsContainer.addEventListener("loadProductsFailed", (event) => {
  showNotification(event.detail.message, event.detail.type)
})


productListController(productsContainer);
spinnerController(spinnerContainer);
sessionController(sessionContainer)


