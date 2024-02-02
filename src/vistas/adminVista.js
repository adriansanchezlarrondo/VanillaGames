import { proyectos, perfiles } from '../bd/datosPrueba'
import { editarImagenPerfil } from '../componentes/editarImagenPerfil'
import { ls } from '../componentes/funciones'

export default {
  template: // html
    `
    <div class="container mt-5">
        <h1 class="mb-5 fw-light">Panel de administración</h1>
        <div class="card rounded-0">
        <ul class="nav nav-tabs">
            <li class="nav-item w-50">
            <a class="nav-link active" href="#">Usuarios</a>
            </li>
            <li class="nav-item w-50 bg-secondary">
            <a class="nav-link" href="panelProyecto.html">Proyectos</a>
            </li>
        </ul>

        <div class="container text-center">
            <div class="row mt-3">
            <div class="input-group w-50">
                <i class="fa-solid fa-magnifying-glass p-2 border border-secondary bg-secondary"></i>
                <input type="text" class="form-control" placeholder="Buscador">
                <i class="fa-solid fa-x border border-secondary bg-secondary p-2"></i>
            </div>
            </div>
            <table class="table my-5 align-middle text-start">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col" class="dropdown-toggle">URL imagen</th>
                <th scope="col" class="dropdown-toggle">Email</th>
                <th scope="col" class="dropdown-toggle">Nombre</th>
                <th scope="col" class="dropdown-toggle">Apellidos</th>
                <th scope="col" class="dropdown-toggle">Fecha</th>
                <th scope="col" class="dropdown-toggle">Rol</th>
                <th scope="col" class="dropdown-toggle">Estado</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                <td scope="row" class="position-relative">
                    <img src="images/usuario.png" class="img-fluid" width="250" height="250" alt="">
                    <a href="editar.html"><i class="fa-solid fa-pencil bg-success position-absolute bottom-0 end-0 m-2 rounded-circle p-2 fs-7 text-light"></i></a>
                </td>
                <td><input class="" type="text" value="http://imagen.com"></td>
                <td><input class="" type="text" value="email@email.com"></td>
                <td><input class="" type="text" value="Nombre usuario"></td>
                <td><input class="" type="text" value="Apellidos usuario"></td>
                <td><input class="" type="date"></td>
                <td><input class="w-75" type="text" value="opción"></td>
                <td><input class="w-75" type="text" value="opción"></td>
                <td><a href="editar.html" class="link-underline link-underline-opacity-0"><span class="bg-success text-light p-2">Actualizar</span></a></td>
                <td><i class="fa-regular fa-trash-can border border-danger p-2 fs-5 text-danger"></i></td>
                </tr>
                <tr>
                <td scope="row" class="position-relative">
                    <img src="images/usuario.png" class="img-fluid" width="250" height="250" alt="">
                    <a href="editar.html"><i class="fa-solid fa-pencil bg-success position-absolute bottom-0 end-0 m-2 rounded-circle p-2 fs-7 text-light"></i></a>
                </td>
                <td><input class="" type="text" value="http://imagen.com"></td>
                <td><input class="" type="text" value="email@email.com"></td>
                <td><input class="" type="text" value="Nombre usuario"></td>
                <td><input class="" type="text" value="Apellidos usuario"></td>
                <td><input class="" type="date"></td>
                <td><input class="w-75" type="text" value="opción"></td>
                <td><input class="w-75" type="text" value="opción"></td>
                <td><a href="editar.html" class="link-underline link-underline-opacity-0"><span class="bg-success text-light p-2">Actualizar</span></a></td>
                <td><i class="fa-regular fa-trash-can border border-danger p-2 fs-5 text-danger"></i></td>
                </tr>
                <tr>
                <td scope="row" class="position-relative">
                    <img src="images/usuario.png" class="img-fluid" width="250" height="250" alt="">
                    <a href="editar.html"><i class="fa-solid fa-pencil bg-success position-absolute bottom-0 end-0 m-2 rounded-circle p-2 fs-7 text-light"></i></a>
                </td>
                <td><input class="" type="text" value="http://imagen.com"></td>
                <td><input class="" type="text" value="email@email.com"></td>
                <td><input class="" type="text" value="Nombre usuario"></td>
                <td><input class="" type="text" value="Apellidos usuario"></td>
                <td><input class="" type="date"></td>
                <td><input class="w-75" type="text" value="opción"></td>
                <td><input class="w-75" type="text" value="opción"></td>
                <td><a href="editar.html" class="link-underline link-underline-opacity-0"><span class="bg-success text-light p-2">Actualizar</span></a></td>
                <td><i class="fa-regular fa-trash-can border border-danger p-2 fs-5 text-danger"></i></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>

    `,
  script: () => {
    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()

    // **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

    // Capturamos proyectos y guardamos en variable para poder ser filtrada
    const datosProyectos = proyectos
    const datosUsuarios = perfiles

    // Definimos que por defecto se muestran 'proyectos'
    let selectUsuarios = true
    // *** Detectamos si se cambia de proyectos a usuarios al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      if (event.target.classList.contains('fichaUsuarios')) {
        // Si click en Usuarios cambiamos pestaña activa
        document.querySelector('.fichaUsuarios').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        selectUsuarios = true
        console.log('tabusuarios')
        document.querySelector('#tabUsuarios').classList.add('d-block')
        document.querySelector('#tabUsuarios').classList.remove('d-none')
        document.querySelector('#tabProyectos').classList.add('d-none')
      } else {
        // Si click en Proyectos cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaUsuarios').classList.remove('active')
        selectUsuarios = false
        console.log('tabProyectos')
        document.querySelector('#tabProyectos').classList.add('d-block')
        document.querySelector('#tabProyectos').classList.remove('d-none')
        document.querySelector('#tabUsuarios').classList.add('d-none')
      }
      // Actualizamos los datos en el panel central
      pintaProyectos(datosProyectos)
      pintaUsuarios(datosUsuarios)
    })

    // *** FUNCIÓN PARA PINTAR TABLA PROYECTOS A PARTIR DE ARRAY datos ***
    const pintaProyectos = (proyectosFiltrados) => {
      let tablaProyectos = // html
    `
    <!-- Tabla de proyectos -->
    <table
      class="table table-hover align-middle mt-3"
      style="min-width: 1000px"
    >
      <thead>
        <tr>
          <!-- Encabezados de la tabla -->
        </tr>
      </thead>
      <tbody>
    `
    // Para cada proyecto en el array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
      // Genera filas de datos de proyecto en la tabla
      })
      tablaProyectos += // html
    `
      </tbody>
    </table>
    `
    // Inyecta el resultado en el contenedor con el id 'tabProyectos'
      document.querySelector('#tabProyectos').innerHTML = tablaProyectos
    }

    // *** FILTRO PARA BUSCADOR ***
    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById('inputBusqueda')
    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener('input', () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim()
      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      let informacion = []
      if (selectUsuarios) {
        informacion = datosUsuarios
      } else {
        informacion = datosProyectos
      }
      const informacionFiltrada = informacion.filter(proyecto => {
        // Itera sobre las propiedades (campos) de cada proyecto
        for (const key in proyecto) {
          // Obtenemos el valor del campo actual
          const valorCampo = proyecto[key]
          // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
          if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
            // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
            return true
          }
        }
        // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
        return false
      })
      // Volvemos a pintar los datos con los proyectos o usuarios filtrados por el buscador
      if (selectUsuarios) {
        pintaUsuarios(informacionFiltrada)
      } else {
        pintaProyectos(informacionFiltrada)
      }
    })
    // Borrar datos del input del buscador
    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      document.getElementById('inputBusqueda').value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaProyectos(datosProyectos)
      pintaUsuarios(datosUsuarios)
    })

    // *** VALIDACION DE FORMULARIOS CON BOOTSTRAP ***
    formulario.addEventListener('change', (e) => {
    // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        console.log('No valida')
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      }
    })

    // Función para enviar datos a la base de datos
    function enviaDatos (id) {
    // capturamos los datos del tr correspondiente al botón pulsado
      const proyectoEditado = {
        imagen: document.querySelector('#urlImagen_' + id).value,
        nombre: document.querySelector('#nombreUsuario_' + id).value,
        apellidos: document.querySelector('#apellidosUsuario_' + id).value,
        estado: document.querySelector('#estado_' + id).value,
        email: document.querySelector('#email_' + id).value
      }
      alert(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`)
      console.log(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`, proyectoEditado)
    }
    // Función para borrar registro de la base de datos
    function borrarUsuario (id) {
      alert('Borrando usuario ' + id)
    }

    // *** BOTONES DE EDICIÓN Y BORRADO DE PROYECTOS ***
    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
    // Si hemos pulsado sobre uno de los botones
      if (event.target.classList.contains('botonAdmin')) {
        const boton = event.target
        // Capturamos el id de su dataset
        const id = boton.dataset.id
        if (boton.classList.contains('botonEditar')) {
        // Si se trata de editar
          console.log('Editar proyecto ' + id)

          // Cargamos la vista para editar proyecto pasando como parámetro el id
          window.location = `#/proyectoEditar/${id}`
        }
        if (boton.classList.contains('botonBorrar')) {
        // Si se trata de borrar
          console.log('Borrar proyecto ' + id)

        // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
    })

    // *************** PARA EL TAB DE USUARIOS ********

    // Capturamos el formulario para edición de usuarios
    const formulario = document.querySelector('#formAdminUsuarios')
    // Gestión de click sobre botones dentro del formulario
    formulario.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Si hacemos click sobre el botonActualizar
      if (e.target.classList.contains('botonActualizar') && formulario.checkValidity()) {
        const id = e.target.dataset.id
        enviaDatos(id)
      } else {
        formulario.classList.add('was-validated')
      }

      // Si hacemos click sobre Borrar registro
      if (e.target.classList.contains('botonEliminar')) {
        const tr = e.target.parentNode.parentNode
        // ocultar tr
        tr.classList.add('d-none')
        const id = e.target.dataset.id
        borrarUsuario(id)
      }

      // Si hacemos click sobre Editar imagen avatar
      if (e.target.classList.contains('botonEditarImagen')) {
        // Capturamos datos para enviar al modal
        const urlAvatar = e.target.dataset.urlavatar
        const urlInputAvatar = e.target.dataset.urlinputavatar
        const id = e.target.dataset.id
        // Abrimos ventana de edición de perfil (del componente editarImagenPerfil)
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id)
      }
    })
  }
}
