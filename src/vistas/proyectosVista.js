import { proyectos } from '../bd/datosPrueba'

export default {
  template: // html
    `
    <div class="container mt-5">
      <h1 class="mb-5 fw-light">Proyectos</h1>
      <div class="card rounded-0">
        <ul class="nav nav-tabs">
          <li class="nav-item w-50 bg-secondary">
            <a class="nav-link" href="#">Todos los proyectos</a>
          </li>
          <li class="nav-item w-50">
            <a class="nav-link active rounded-0" aria-current="page" href="#">Mis proyectos</a>
          </li>
        </ul>
    
        <div class="container text-center">
          <div class="row mt-3">
            <div class="col-md-4">
              <div class="text-center bg-primary py-2"><a href="nuevo.html" class="link-underline link-underline-opacity-0 text-light">Subir Proyecto</a></div>
            </div>
            <div class="col-md-8">
              <div class="input-group">
                <i class="fa-brands fa-buromobelexperte p-2 border border-secondary bg-secondary"></i>
                <i class="fa-solid fa-bars p-2 border border-secondary bg-secondary mx-2"></i>
                <i class="fa-solid fa-magnifying-glass p-2 border border-secondary bg-secondary"></i>
                <input type="text" class="form-control" placeholder="Buscador">
                <i class="fa-solid fa-x border border-secondary bg-secondary p-2"></i>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table my-5 align-middle">
              <thead class="text-start">
                <tr>
                  <th scope="col"></th>
                  <th scope="col" class="dropdown-toggle">Nombre</th>
                  <th scope="col" class="dropdown-toggle">Descripción</th>
                  <th scope="col" class="dropdown-toggle">Enlace</th>
                  <th scope="col">Repositorio</th>
                  <th scope="col" class="dropdown-toggle">Autor</th>
                  <th scope="col" class="dropdown-toggle">Fecha</th>
                  <th scope="col" class="dropdown-toggle">Estado</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody id="tbodyProyectos" class="table-group-divider">
                <tr>
                  <td scope="row"><img src="images/tres.jpeg" width="60" height="60" alt=""></td>
                  <td>Proyecto ejemplo 1</td>
                  <td>Ejemplo de web para centro fp</td>
                  <td><a href="https://www.fpllefia.com/">https://www.fpllefia.com/</a></td>
                  <td><a href="https://www.fpllefia.com/">carrebola.github.com/juego1</a></td>
                  <td>Carlos</td>
                  <td>13/12/2021</td>
                  <td>?</td>
                  <td><a href="edicion.html"><i class="fa-solid fa-pencil border border-primary p-2 fs-5 text-primary"></i></a></td>
                  <td><i class="fa-regular fa-trash-can border border-danger p-2 fs-5 text-danger"></i></td>
                </tr>
                <tr>
                  <td scope="row"><img src="images/tres.jpeg" width="60" height="60" alt=""></td>
                  <td>Proyecto ejemplo 1</td>
                  <td>Ejemplo de web para centro fp</td>
                  <td><a href="https://www.fpllefia.com/">https://www.fpllefia.com/</a></td>
                  <td><a href="https://www.fpllefia.com/">carrebola.github.com/juego1</a></td>
                  <td>Carlos</td>
                  <td>13/12/2021</td>
                  <td>?</td>
                  <td><a href="nuevo.html"><i class="fa-solid fa-pencil border border-primary p-2 fs-5 text-primary"></i></a></td>
                  <td><i class="fa-regular fa-trash-can border border-danger p-2 fs-5 text-danger"></i></td>
                </tr>
                <tr>
                  <td scope="row"><img src="images/tres.jpeg" width="60" height="60" alt=""></td>
                  <td>Proyecto ejemplo 1</td>
                  <td>Ejemplo de web para centro fp</td>
                  <td><a href="https://www.fpllefia.com/">https://www.fpllefia.com/</a></td>
                  <td><a href="https://www.fpllefia.com/">carrebola.github.com/juego1</a></td>
                  <td>Carlos</td>
                  <td>13/12/2021</td>
                  <td>?</td>
                  <td><a href="detalle.html"><i class="fa-solid fa-pencil border border-primary p-2 fs-5 text-primary"></i></a></td>
                  <td><i class="fa-regular fa-trash-can border border-danger p-2 fs-5 text-danger"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    `,
  script: () => {
    // Función para pintar tabla a partir de array
    const pintaTabla = (proyectos) => {
      let tbodyProyectos = ''
      // Para cada proyecto del array 'proyectos'
      proyectos.forEach(proyecto => {
      // sumamos un tr con los datos del proyecto
        tbodyProyectos += `
      <tr>
        <td>
          <div class="containerImagen">
            <img 
              width="200px" 
              src=${proyecto.imagen || 'images/imagenVacia.png'} 
              alt="imagen proyecto" />
          </div>
        </td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td><a href="${proyecto.enlace}"><i class="bi bi-link fs-4"></i></a></td>
        <td><a href="${proyecto.repositorio}"><i class="bi bi-folder-symlink fs-4"></i></a></td>
        <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
        <td>${proyecto.created_at}</td>
        <td>${proyecto.estado}</td>
        <td>
          <a
          data-user_id = ${proyecto.user_id}
          class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
        </td>
        <td>
          <a
            data-user_id = ${proyecto.user_id}
            class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
        </td>
      </tr>
            
      `
      })
      // inyectamos el resultado en el tbody
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }

    // Ejecutamos la función
    pintaTabla(proyectos)
  }
}
