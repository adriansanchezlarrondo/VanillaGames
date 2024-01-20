import { perfiles } from '../bd/datosPrueba'
import { ls } from '../componentes/funciones'
import { header } from '../componentes/header'

export default {
  template: // html
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
          <div class="col-md-4">
              <h1 class="text-center mb-5 fw-light">Iniciar Sesión</h1>
              <div class="card rounded-0">
                  <div class="card-body">
                      <form id="formulario" action="proyecto.html">
                          <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input id="email" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
                          </div>
                          <div class="mb-3">
                              <label for="password" class="form-label">Contraseña:</label>
                              <input type="password" name="password" class="form-control rounded-0" id="password">
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
    `,
  script: () => {
    console.log('vista login cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formulario')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
        console.log('No valida')
      } else {
        enviarDatos(formulario)
      }
    })

    function enviarDatos (formulario) {
      const email = formulario.email.value
      const pass = formulario.password.value

      // buscamos el indice del email en el array perfiles
      const indexUser = perfiles.findIndex((user) => user.email === email) // 1
      // Si encuentra un usuario
      if (indexUser > 0) {
        // Si la contraseña es correcta
        if (perfiles[indexUser].contraseña === pass) {
          console.log('¡login correcto!')
          const usuario = {
            nombre: perfiles[indexUser].nombre,
            apellidos: perfiles[indexUser].apellidos,
            email: perfiles[indexUser].email,
            rol: perfiles[indexUser].rol,
            avatar: perfiles[indexUser].avatar,
            user_id: perfiles[indexUser].user_id
          }
          // Guardamos datos de usaurio en localstorage
          ls.setUsuario(usuario)
          // Cargamos página home
          window.location = '#/proyectos'
          // Actualizamos el header para que se muestren los menús que corresponden al rol
          header.script()
        } else {
          // console.log('La contraseña no corresponde')
          alert('El usuario no existe o la contraseña no es correcta')
        }
      } else {
        // console.log('El usuario no existe')
        alert('El usuario no existe o la contraseña no es correcta')
      }
    }
  }
}
