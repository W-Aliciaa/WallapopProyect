export const buildAuthenticatedSession = (username) => {
  return `

    <a href="/create-product.html" class="btn-create">+ Publicar Anuncio</a>
    <span class="session-username">${username}</span>
    <button title="Cerrar sesión">Cerrar Sesion ⏻</button>
    
  `
}

export const buildUnathenticatedSession = () => {
  return `
      <a href="/signup.html" class="signup">Signup</a>
      <a href="/login.html">Login</a>
  `
}