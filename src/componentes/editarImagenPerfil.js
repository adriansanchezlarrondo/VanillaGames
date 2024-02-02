import adminVista from '../vistas/adminVista'
export const editarImagenPerfil = {
  template: // html
  `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarImagenPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate action="">
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
                    id="imagenUsuario"
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(.images/avatar.svg);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="urlImagenUsuario"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button 
              id="botonActualizarImagen"
              type="button" 
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: (urlAvatar, urlInputAvatar, user_id) => {
    console.log('modal editar imagen perfil cargado:', urlAvatar)
    document.querySelector('#urlImagenUsuario').value = urlAvatar
    // Capturamos la url del input y actualizamos la imagen
    const imagenUsuario = document.querySelector('#imagenUsuario')
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`

    // modificación de imagen al cambiar input
    document.querySelector('#urlImagenUsuario').addEventListener('input', () => {
      urlAvatar = document.querySelector('#urlImagenUsuario').value
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`
    })

    // Boton enviar
    document.querySelector('#botonActualizarImagen').addEventListener('click', () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar

      // ***** AQUÍ HAY QUE ACTUALIZAR LA BASE DE DATOS CON LA IMAGEN
      console.log('Actualizando base de datos: ' + user_id)
      adminVista.script()
    })
  }
}
