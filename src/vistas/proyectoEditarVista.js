export default {
  template: // html
    `
    <div class="container mt-5">
        <h1 class="mt-3 mb-4">Edición del proyecto</h1>
        <div class="text-end">
        <a href="proyecto.html"><button class="btn border"><i class="fa-solid text-secondary me-2 fa-arrow-right-to-bracket fa-rotate-180"></i>Volver</button></a>
        </div>
        <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
                <img class="w-100" src="images/tresraya.jpeg" alt="">
                <div class="mt-3">
                    <label for="InputNombre1" class="form-label"><strong>URL imagen:</strong></label>
                    <input type="text" class="form-control" id="repositorio" value="http://enlaceImagen.com">
                </div>
            </div>
            <div class="col-md-8">
                <form id="formRegistro">
                    <div class="mb-3">
                        <label for="nombre" class="form-label"><strong>Nombre:</strong></label>
                        <input type="text" class="form-control" id="nombre" value="Nombre Autor">
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label"><strong>Descripción:</strong></label>
                        <textarea class="form-control" id="descripcion"
                            rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis repudiandae, vitae optio a voluptate harum doloribus ipsam laudantium culpa officia beatae quibusdam quaerat nulla rem maxime. Minus, eligendi culpa.</textarea>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="estado" class="form-label"><strong>Estado:</strong></label>
                            <input type="text" class="form-control" id="estado" value="Estado">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="fecha" class="form-label"><strong>Fecha:</strong></label>
                            <input type="date" class="form-control" id="fecha">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="enlace" class="form-label"><strong>Enlace:</strong></label>
                        <input type="text" class="form-control" id="enlace" value="http://enlace.com">
                    </div>
                    <div class="mb-3">
                        <label for="repositorio" class="form-label"><strong>Repositorio:</strong></label>
                        <input type="text" class="form-control" id="repositorio" value="user.github.com/123456">
                    </div>
                    <a href="proyecto.html"><button type="submit" class="btn btn-success">Subir proyecto</button></a>
                </form>
            </div>
        </div>
    </div>

    `,
  script: () => {
    console.log('vista proyectoEditar cargada')
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
