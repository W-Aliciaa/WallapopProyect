import { signupController } from "./signup/signup-controller.js";
import { notificationsController } from "./notifications/notification-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

const signupForm = document.querySelector('form');
const notificationsContainer = document.querySelector('.notifications-container');
const spinnerContainer = document.querySelector('.spinner-container');

const { showNotification } = notificationsController(notificationsContainer)
const { showSpinner, hideSpinner } = spinnerController(spinnerContainer)

signupForm.addEventListener('signupStarted', showSpinner);
signupForm.addEventListener('signupFinished', hideSpinner)


signupForm.addEventListener('userCreated', (event) => {
  showNotification(event.detail.message, event.detail.type)
})
signupForm.addEventListener('userNotCreated', (event) => {
  showNotification(event.detail.message, event.detail.type)
})

signupController(signupForm)