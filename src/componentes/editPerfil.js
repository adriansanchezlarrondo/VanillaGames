import { ls } from './funciones'
export const editarPerfil = {
  template: // html
  `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate id="formularioEditarPerfil" action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(${ls.getUsuario().avatar});
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="avatar"
                    type="url"
                    class="form-control"
                    value="${ls.getUsuario().avatar}"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>

                <div class="">
                  <!-- Nombre -->
                  <label for="nombrePerfil" class="form-label">Nombre:</label>
                  <input required id="nombrePerfil" type="text" class="form-control" value="${ls.getUsuario().nombre}" />
                  <div class="invalid-feedback">El nombre es requerido</div>
                  <!-- Apellidos -->
                  <label for="apellidosPerfil" class="form-label">Apellidos:</label>
                  <input id="apellidosPerfil" type="text" class="form-control" value = "${ls.getUsuario().apellidos}" />

                  <!-- Email -->
                  <label for="emailPerfil" class="form-label">Email:</label>
                  <input required id="emailPerfil" type="email" class="form-control" value = "${ls.getUsuario().email}" />
                  <div class="invalid-feedback">El formato no es correcto</div>

                  <!-- Contraseña -->
                  <label for="passPerfil" class="form-label mt-3">Nueva contraseña:</label>
                  <input
                    
                    minlength="6"
                    id="passPerfil"
                    type="password"
                    class="form-control"
                  />
                  <div class="invalid-feedback">
                    La contraseña debe ser de 6 caracteres como mínimo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button id="enviarPerfilEditado" data-id = ${ls.getUsuario().user_id} type="submit" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: () => {
    console.log('script editar perfil cargado')
    // Validación bootstrap
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioEditarPerfil')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
    // Comprobamos si el formulario no valida
    // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      if (!formulario.checkValidity()) {
        // formulario no valida
      } else {
        //* ** ENVIAMOS DATOS A LA BASE DE DATOS */
        enviaDatos()
      }
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const perfilEditado = {
        avatar: document.querySelector('#avatar').value,
        nombre: document.querySelector('#nombrePerfil').value,
        apellidos: document.querySelector('#apellidosPerfil').value,
        email: document.querySelector('#emailPerfil').value,
        contraseña: document.querySelector('#passPerfil').value

      }
      alert(`Enviando a la base de datos el objeto con id = ${ls.getUsuario().user_id}`)
      console.log(`Enviando a la base de datos el objeto con user_id = ${ls.getUsuario().user_id}`, perfilEditado)
    }
  }
}
