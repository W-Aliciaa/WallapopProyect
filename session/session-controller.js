import { getLoggedUserInfo } from "./session-model.js";
import { buildAuthenticatedSession, buildUnathenticatedSession } from "./session-view.js";

export const sessionController = async (sessionContainer) => {

  const token = localStorage.getItem('token');

  if (token) {
    try {
      const { username } = await getLoggedUserInfo()
      sessionContainer.innerHTML = buildAuthenticatedSession(username);
      const closeSessionButton = sessionContainer.querySelector('button');
      closeSessionButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        // window.location.reload()
        sessionController(sessionContainer)
      })  
    } catch (error) {
      localStorage.removeItem('token');
      sessionContainer.innerHTML = buildUnathenticatedSession();
    }

  } else {
    sessionContainer.innerHTML = buildUnathenticatedSession()
  }
}