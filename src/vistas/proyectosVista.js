/* eslint-disable no-undef */
import { Proyecto } from '../bd/proyecto'
import { User } from '../bd/user'
import { ls } from '../componentes/funciones'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Proyectos</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button 
            class="selectorFicha fichaProyectos nav-link w-100 active"
          >
            Todos los proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaMisProyectos" class="nav-item w-50">
          <button 
            class="selectorFicha fichaMisProyectos nav-link w-100"
          >
            Mis proyectos
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3">
      <!-- Boton para subir proyectos -->
        <a href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="btn btn-secondary me-2 bi bi-grid-3x3-gap vistaTabla">
        </button>
        <button class="btn btn-secondary me-2 bi bi-list vistaTarjetas">
        </button>
        <!-- Buscador -->
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"
            ><i class="bi bi-search"></i
          ></span>
          <input
            id="inputBusqueda"
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><i id="borrarBuscador" class="bi bi-x"></i
          ></span>
        </div>
      </div>
    </div>
    
    <!-- Tabla de proyectos -->
    <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
      <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1000px"
      >
        <thead>
          <tr>
            <th></th>
            <th>
              Nombre <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Descripción <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Enlace <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>Repositorio</th>
            <th>
              Autor <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tbodyProyectos">
          <!-- Aqui van los datos generados por la lógica -->
          <p>No tienes proyectos</p>
        </tbody>
      </table>
    </div>

    <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
      <p>No tienes proyectos</p>
    </div>
  </div>
</div>
  `,
  script: async () => {
    // **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

    // Capturamos proyectos y guardamos en variable para poder ser filtrada
    const datosBd = await Proyecto.getAll()
    console.log('datos', datosBd)
    const user = await User.getUser()
    const userId = user.id
    console.log('userId', userId)
    const datos = datosBd.map((dato) => {
      const fecha = dato.created_at
      const nuevaFecha = fecha.split('T')[0]
      const fechaFormateada = `${nuevaFecha.split('-')[2]}/${nuevaFecha.split('-')[1]}/${nuevaFecha.split('-')[0]}`
      const datoFormateado = {
        ...dato,
        created_at: fechaFormateada
      }
      return datoFormateado
    })

    let misProyectos = false
    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()
    console.log(usuario)

    // ####################################################################
    // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
    // ####################################################################

    const pintaTabla = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.user_id === userId)
      }

      let tbodyProyectos = ''
      // Iteramos para cada proyecto del array 'proyectos'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (userId === proyecto.user_id) {
          botones =
            `
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a></td>
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a></td>
          `
        }
        // sumamos un tr con los datos del proyecto de la iteración
        tbodyProyectos += // html
          `
        <tr data-id="${proyecto.id}" class="verDetalle">
          <td>
            <div class="containerImagen">
              <img 
                class="verDetalle"
                data-id="${proyecto.id}"
                width="200px" 
                src=${proyecto.imagen || 'images/imagenVacia.png'} 
                alt="imagen proyecto" />
            </div>
          </td>
          <td>${proyecto.nombre}</td>
          <td>${proyecto.descripcion}</td>
          <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
          <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
          <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
          <td>${proyecto.created_at}</td>
          <td>${proyecto.estado}</td>
          <td>
            <!-- Botones de edición y borrado -->
            ${botones}
          </td>
        </tr>   
        `
      })
      // inyectamos el resultado en el tbody
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }

    // ####################################################################
    // Función para pintar tarjetas
    // ####################################################################

    const pintaTarjetas = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.user_id === userId)
        console.log('proyectosUserId', proyectosFiltrados)
      }
      let tarjetasProyectos = ''
      // Iteramos para cada proyecto del array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones =
            `
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
          `
        }
        // sumamos un tr con los datos del proyecto
        tarjetasProyectos += // html
          `
        <!-- tarjeta  -->
        <div class="col-12 col-lg-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-4 verDetalle"
                data-id="${proyecto.id}"
                style="
                  background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
                  background-position: center;
                  background-size: cover;
                "
              ></div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">${proyecto.nombre}</h5>
                  <p class="card-text">
                    ${proyecto.descripcion}
                  </p>
                  <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
                  <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>
                  <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}" target="_blank"><i class="bi bi-link"></i></a>
                  <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink"></i></a>
                  <button class="btn btn-sm btn-success">${proyecto.estado}</button>
                  <!-- Botones editar y borrar -->
                  ${botones}
                </div>
              </div>
            </div>
          </div>
        </div>  
        `
      })
      // inyectamos el resultado en tbody
      document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
    }

    // *** Pintamos los datos en tabla y tarjetas ***
    pintaTabla(datos)
    pintaTarjetas(datos)

    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################

    // Selección vista tabla
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      // Lineas originales del html para los tabs:
      // <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
      // <div class="d-xl-none row">

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTarjeta = document.querySelector('.vistaTarjetas')
      botonTarjeta.classList.remove('btn-success')
      botonTarjeta.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'col-12 d-block')
      document.querySelector('#tabTarjetas').setAttribute('class', 'd-none')
    })

    // Selección vista tarjetas
    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas')

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTabla = document.querySelector('.vistaTabla')
      botonTabla.classList.remove('btn-success')
      botonTabla.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'd-none')
      document.querySelector('#tabTarjetas').setAttribute('class', 'row')
    })

    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById('inputBusqueda')

    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener('input', () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim()

      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      const proyectosFiltrados = datos.filter(proyecto => {
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
      // Volvemos a pintar los datos con los proyectos filtrados por el buscador
      pintaTabla(proyectosFiltrados)
      pintaTarjetas(proyectosFiltrados)
    })

    // ####################################################################
    // Borrar datos del input del buscador al hacer click en 'x'
    // ####################################################################

    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      inputBusqueda.value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // ####################################################################
    // Vista 'Todos los proyectos' / 'Mis proyectos'
    // ####################################################################

    // *** Detectamos si se cambia de proyectos a mis proyectos al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      // Si click en 'Mis proyectos' cambiamos pestaña activa
      if (event.target.classList.contains('fichaMisProyectos')) {
        document.querySelector('.fichaMisProyectos').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        misProyectos = true
      } else {
        // Si click en 'Todos los proyectos' cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaMisProyectos').classList.remove('active')
        misProyectos = false
      }
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // ####################################################################
    // BOTONES DE EDICIÓN, BORRADO y VISUALIZACIÓN DE DETALLE DE PROYECTOS
    // ####################################################################

    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
      let id = ''
      // Si hemos pulsado sobre uno de los botones DE EDICIÓN O BORRADO
      if (event.target.classList.contains('botonAdmin')) {
        const boton = event.target
        // Capturamos el id de su dataset
        const id = boton.dataset.id
        if (boton.classList.contains('botonEditar')) {
          // Si se trata de editar
          console.log('Editar proyecto ' + id)

          // Cargamos la vista para editar proyecto pasandole como parámetro el id
          window.location = `#/proyectoEditar/${id}`
        } else if (boton.classList.contains('botonBorrar')) {
          // Si se trata de borrar
          alert('Borrar proyecto ' + id)

          // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
      // Visualizar detalle del proyecto si click sobre tr de vista tabla
      if (event.target.tagName === 'TD') {
        console.log('clic en td')
        id = event.target.parentNode.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
      // Si hacemos clic sobre la imagen de tabla o de vista tarjetas
      if (event.target.classList.contains('verDetalle')) {
        id = event.target.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
    })

    // ####################################################################
    // Mostrar/ocultar botón 'subir proyecto'
    // ####################################################################

    // Ocultamos el botón de subir proyecto si el rol es registrado
    if (usuario.rol === 'registrado') {
      document.querySelector('#botonSubirProyecto').classList.add('disabled')
    }
  }
}
