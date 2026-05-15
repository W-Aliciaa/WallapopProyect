import { loginUser } from "./login-model.js";

export const loginController = (loginForm) => {

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const loginData = new FormData(loginForm);
    const email = loginData.get('email')
    const password = loginData.get('password')
  
    try {
      const token = await loginUser(email, password)
      const userSignedEvent = new CustomEvent("userSigned", {
          detail: {
            message: "Has iniciado sesión correctamente",
            type: "success"
          }
      })
      loginForm.dispatchEvent(userSignedEvent);

      localStorage.setItem('token', token)
      window.location = '/'
    } catch (error) {
        const userNotSignedEvent = new CustomEvent("userNotSigned", {
            detail: {
              message: error.message,
              type: "error"
            }
        })
        loginForm.dispatchEvent(userNotSignedEvent);
      }
  })
}