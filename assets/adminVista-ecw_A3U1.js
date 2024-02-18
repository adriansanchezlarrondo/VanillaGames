import { p as proyectos, a as perfiles } from "./datosPrueba-49L0HeBn.js";
import { l as ls } from "./main-ot73n3aY.js";
const editarImagenPerfil = {
  template: (
    // html
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
  `
  ),
  script: (urlAvatar, urlInputAvatar, user_id) => {
    console.log("modal editar imagen perfil cargado:", urlAvatar);
    document.querySelector("#urlImagenUsuario").value = urlAvatar;
    const imagenUsuario = document.querySelector("#imagenUsuario");
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    document.querySelector("#urlImagenUsuario").addEventListener("input", () => {
      urlAvatar = document.querySelector("#urlImagenUsuario").value;
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    });
    document.querySelector("#botonActualizarImagen").addEventListener("click", () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar;
      console.log("Actualizando base de datos: " + user_id);
      adminVista.script();
    });
  }
};
const adminVista = {
  template: (
    // html
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

    `
  ),
  script: () => {
    const usuario = ls.getUsuario();
    const datosProyectos = proyectos;
    const datosUsuarios = perfiles;
    let selectUsuarios = true;
    document.querySelector(".nav-tabs").addEventListener("click", (event) => {
      if (event.target.classList.contains("fichaUsuarios")) {
        document.querySelector(".fichaUsuarios").classList.add("active");
        document.querySelector(".fichaProyectos").classList.remove("active");
        selectUsuarios = true;
        console.log("tabusuarios");
        document.querySelector("#tabUsuarios").classList.add("d-block");
        document.querySelector("#tabUsuarios").classList.remove("d-none");
        document.querySelector("#tabProyectos").classList.add("d-none");
      } else {
        document.querySelector(".fichaProyectos").classList.add("active");
        document.querySelector(".fichaUsuarios").classList.remove("active");
        selectUsuarios = false;
        console.log("tabProyectos");
        document.querySelector("#tabProyectos").classList.add("d-block");
        document.querySelector("#tabProyectos").classList.remove("d-none");
        document.querySelector("#tabUsuarios").classList.add("d-none");
      }
      pintaProyectos(datosProyectos);
      pintaUsuarios(datosUsuarios);
    });
    const pintaProyectos = (proyectosFiltrados) => {
      let tablaProyectos = (
        // html
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
      );
      proyectosFiltrados.forEach((proyecto) => {
      });
      tablaProyectos += // html
      `
      </tbody>
    </table>
    `;
      document.querySelector("#tabProyectos").innerHTML = tablaProyectos;
    };
    const inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      let informacion = [];
      if (selectUsuarios) {
        informacion = datosUsuarios;
      } else {
        informacion = datosProyectos;
      }
      const informacionFiltrada = informacion.filter((proyecto) => {
        for (const key in proyecto) {
          const valorCampo = proyecto[key];
          if (typeof valorCampo === "string" && valorCampo.toLowerCase().includes(textoBusqueda)) {
            return true;
          }
        }
        return false;
      });
      if (selectUsuarios) {
        pintaUsuarios(informacionFiltrada);
      } else {
        pintaProyectos(informacionFiltrada);
      }
    });
    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      document.getElementById("inputBusqueda").value = "";
      pintaProyectos(datosProyectos);
      pintaUsuarios(datosUsuarios);
    });
    formulario.addEventListener("change", (e) => {
      if (!formulario.checkValidity()) {
        console.log("No valida");
        formulario.classList.add("was-validated");
      }
    });
    function enviaDatos(id) {
      const proyectoEditado = {
        imagen: document.querySelector("#urlImagen_" + id).value,
        nombre: document.querySelector("#nombreUsuario_" + id).value,
        apellidos: document.querySelector("#apellidosUsuario_" + id).value,
        estado: document.querySelector("#estado_" + id).value,
        email: document.querySelector("#email_" + id).value
      };
      alert(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`);
      console.log(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`, proyectoEditado);
    }
    function borrarUsuario(id) {
      alert("Borrando usuario " + id);
    }
    document.querySelector("main").addEventListener("click", (event) => {
      if (event.target.classList.contains("botonAdmin")) {
        const boton = event.target;
        const id = boton.dataset.id;
        if (boton.classList.contains("botonEditar")) {
          console.log("Editar proyecto " + id);
          window.location = `#/proyectoEditar/${id}`;
        }
        if (boton.classList.contains("botonBorrar")) {
          console.log("Borrar proyecto " + id);
        }
      }
    });
    const formulario = document.querySelector("#formAdminUsuarios");
    formulario.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains("botonActualizar") && formulario.checkValidity()) {
        const id = e.target.dataset.id;
        enviaDatos(id);
      } else {
        formulario.classList.add("was-validated");
      }
      if (e.target.classList.contains("botonEliminar")) {
        const tr = e.target.parentNode.parentNode;
        tr.classList.add("d-none");
        const id = e.target.dataset.id;
        borrarUsuario(id);
      }
      if (e.target.classList.contains("botonEditarImagen")) {
        const urlAvatar = e.target.dataset.urlavatar;
        const urlInputAvatar = e.target.dataset.urlinputavatar;
        const id = e.target.dataset.id;
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id);
      }
    });
  }
};
export {
  adminVista as default
};
