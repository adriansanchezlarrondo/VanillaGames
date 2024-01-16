export default {
  template: // html
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
          <div class="col-md-4">
              <h1 class="text-center mb-5 fw-light">Iniciar Sesión</h1>
              <div class="card rounded-0">
                  <div class="card-body">
                      <form id="formRegistro" action="proyecto.html">
                          <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input type="email" class="form-control rounded-0" id="email">
                          </div>
                          <div class="mb-3">
                              <label for="password" class="form-label">Contraseña:</label>
                              <input type="password" class="form-control rounded-0" id="password">
                          </div>
                          <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">Recordar Sesión</label>
                          </div>
                          <div class="text-end mb-3">
                            <a href="#">¿Has olvidado la contraseña?</a>
                          </div>
                          <button type="submit" class="btn btn-primary rounded-0 w-100">Iniciar Sesión</button>
                      </form>
                  </div>
              </div>
              <div class="mt-5 text-center border border-secondary bg-secondary py-2">
                <a href="registro.html" class="link-underline link-underline-opacity-0 text-dark">¿Eres nuevo? Regístrate</a>
              </div>
          </div>
      </div>
    </div>
    `, // Lógica para loginVista.js #14
  script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formRegistro')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      }
    })
  }
}
