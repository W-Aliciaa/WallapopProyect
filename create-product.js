import { createProductController } from "./create-product/create-product-controller.js";
import { notificationsController } from "./notifications/notification-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

const notificationsContainer = document.querySelector('.notifications-container');
const spinnerContainer = document.querySelector('.spinner-container');
const formContainer = document.querySelector('.create-product-form-container');

const { showNotification } = notificationsController(notificationsContainer);
const { showSpinner, hideSpinner } = spinnerController(spinnerContainer);

const token = localStorage.getItem('token');

//Si no esta la sesión iniciada no se pueden crear productos
if (!token) {
  alert('Debes iniciar sesión para crear un anuncio')
  window.location = '/';
} else {
  formContainer.addEventListener('productCreationStarted', showSpinner);
  formContainer.addEventListener('productCreationFinished', hideSpinner);
  
  formContainer.addEventListener('productCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
    setTimeout(() => {
      window.location = '/';
    }, 2000);
  });

  formContainer.addEventListener('productCreationFailed', (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  createProductController(formContainer);
}