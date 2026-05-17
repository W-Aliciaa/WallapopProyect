import { loginController } from "./login/login-controller.js";
import { notificationsController } from './notifications/notification-controller.js'
import { spinnerController } from "./spinner/spinner-controller.js"

const notificationsContainer = document.querySelector('.notifications-container')
const spinnerContainer = document.querySelector('.spinner-container')
const loginForm = document.querySelector('form')

const { showNotification } = notificationsController(notificationsContainer)
const { showSpinner, hideSpinner } = spinnerController(spinnerContainer)

loginForm.addEventListener('loginStarted', showSpinner);
loginForm.addEventListener('loginFinished', hideSpinner);

loginForm.addEventListener('userSigned', (event) => {
  showNotification(event.detail.message, event.detail.type)
})
loginForm.addEventListener('userNotSigned', (event) => {
  showNotification(event.detail.message, event.detail.type)
})


loginController(loginForm)