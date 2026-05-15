import { signupController } from "./signup/signup-controller.js";
import { notificationsController } from "./notifications/notification-controller.js";

const signupForm = document.querySelector('form');
const notificationsContainer = document.querySelector('.notifications-container');

const { showNotification } = notificationsController(notificationsContainer)

signupForm.addEventListener('userCreated', (event) => {
  showNotification(event.detail.message, event.detail.type)
})
signupForm.addEventListener('userNotCreated', (event) => {
  showNotification(event.detail.message, event.detail.type)
})

signupController(signupForm)