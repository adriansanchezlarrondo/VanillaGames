/* eslint-disable no-undef */
import { User } from '../bd/user'
import { Perfil } from '../bd/perfil'

export default {
  template: // html
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <h1 class="text-center mb-4 fw-light">Registro</h1>
          <div class="card rounded-0">
            <div class="card-body">
              <form id="formRegistro" action="proyecto.html">
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre:</label>
                  <input type="text" class="form-control rounded-0" id="nombre">
                </div>
                <div class="mb-3">
                  <label for="apellidos" class="form-label">Apellidos:</label>
                  <input type="text" class="form-control rounded-0" id="apellidos">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input type="email" class="form-control rounded-0" id="email">
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña:</label>
                  <input type="password" class="form-control rounded-0" id="password">
                </div>
                <button type="submit" class="btn btn-primary rounded-0 w-100">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioRegistro')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', async (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        try {
          // Capturamos datos del formulario para el registro
          const usuario = {
            email: formulario.email.value,
            password: formulario.password.value
          }
          console.log('Formulario valido. Datos formulario: ', usuario)
          const user = await User.create(usuario)
          console.log('user creado', user)

          // Capturamos datos del formulario para el perfil
          const perfil = {
            ...usuario,
            user_id: user.id,
            nombre: formulario.nombre.value,
            apellidos: formulario.apellidos.value
          }
          // Insertamos perfil en la base de datos
          Perfil.create(perfil)

          alert('Usuario creado correctamente. Revisa tu email...')
          window.location = '#/login'
        } catch (error) {
          alert('Error al crear usuario', error)
        }
      }
    })
  }
}
