import { loginController } from "./login/login-controller.js";
import { notificationsController } from './notifications/notification-controller.js'

const notificationsContainer = document.querySelector('.notifications-container')
const loginForm = document.querySelector('form')

const { showNotification } = notificationsController(notificationsContainer)

loginForm.addEventListener('userSigned', (event) => {
  showNotification(event.detail.message, event.detail.type)
})
loginForm.addEventListener('userNotSigned', (event) => {
  showNotification(event.detail.message, event.detail.type)
})


loginController(loginForm)