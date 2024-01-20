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
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(images/usuario.png);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="imagen"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>

                <div class="">
                  <!-- Nombre -->
                  <label for="nombre" class="form-label">Nombre:</label>
                  <input required id="nombre" type="text" class="form-control" />
                  <div class="invalid-feedback">El nombre es requerido</div>
                  <!-- Apellidos -->
                  <label for="apellidos" class="form-label">Apellidos:</label>
                  <input id="apellidos" type="text" class="form-control" />

                  <!-- Email -->
                  <label for="email" class="form-label">Email:</label>
                  <input required id="email" type="email" class="form-control" />
                  <div class="invalid-feedback">El formato no es correcto</div>

                  <!-- Contraseña -->
                  <label for="pass" class="form-label mt-3">Contraseña:</label>
                  <input
                    required
                    minlength="6"
                    id="pass"
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
            <button type="button" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: () => {
    console.log('script de modal editar perfil cargado')
  }
}
