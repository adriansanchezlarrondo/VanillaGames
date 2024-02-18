import { P as Proyecto } from "./proyecto-DtCgKZBm.js";
import { U as User, l as ls } from "./main-ot73n3aY.js";
const proyectosVista = {
  template: (
    // html
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
  `
  ),
  script: async () => {
    const datosBd = await Proyecto.getAll();
    console.log("datos", datosBd);
    const user = await User.getUser();
    const userId = user.id;
    console.log("userId", userId);
    const datos = datosBd.map((dato) => {
      const fecha = dato.created_at;
      const nuevaFecha = fecha.split("T")[0];
      const fechaFormateada = `${nuevaFecha.split("-")[2]}/${nuevaFecha.split("-")[1]}/${nuevaFecha.split("-")[0]}`;
      const datoFormateado = {
        ...dato,
        created_at: fechaFormateada
      };
      return datoFormateado;
    });
    let misProyectos = false;
    const usuario = ls.getUsuario();
    console.log(usuario);
    const pintaTabla = (proyectosFiltrados) => {
      if (misProyectos) {
        proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.user_id === userId);
      }
      let tbodyProyectos = "";
      proyectosFiltrados.forEach((proyecto) => {
        let botones = "";
        if (userId === proyecto.user_id) {
          botones = `
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a></td>
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a></td>
          `;
        }
        tbodyProyectos += // html
        `
        <tr data-id="${proyecto.id}" class="verDetalle">
          <td>
            <div class="containerImagen">
              <img 
                class="verDetalle"
                data-id="${proyecto.id}"
                width="200px" 
                src=${proyecto.imagen || "images/imagenVacia.png"} 
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
        `;
      });
      document.querySelector("#tbodyProyectos").innerHTML = tbodyProyectos;
    };
    const pintaTarjetas = (proyectosFiltrados) => {
      if (misProyectos) {
        proyectosFiltrados = proyectosFiltrados.filter((proyecto) => proyecto.user_id === userId);
        console.log("proyectosUserId", proyectosFiltrados);
      }
      let tarjetasProyectos = "";
      proyectosFiltrados.forEach((proyecto) => {
        let botones = "";
        if (usuario.user_id === proyecto.user_id) {
          botones = `
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
          `;
        }
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
                  background-image: url(${proyecto.imagen || "images/imagenVacia.png"});
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
        `;
      });
      document.querySelector("#tabTarjetas").innerHTML = tarjetasProyectos;
    };
    pintaTabla(datos);
    pintaTarjetas(datos);
    document.querySelector(".vistaTabla").addEventListener("click", (boton) => {
      boton.target.classList.add("btn-success");
      const botonTarjeta = document.querySelector(".vistaTarjetas");
      botonTarjeta.classList.remove("btn-success");
      botonTarjeta.classList.add("btn-secondary");
      document.querySelector("#tabTabla").setAttribute("class", "col-12 d-block");
      document.querySelector("#tabTarjetas").setAttribute("class", "d-none");
    });
    document.querySelector(".vistaTarjetas").addEventListener("click", (boton) => {
      console.log("vistaTarjetas");
      boton.target.classList.add("btn-success");
      const botonTabla = document.querySelector(".vistaTabla");
      botonTabla.classList.remove("btn-success");
      botonTabla.classList.add("btn-secondary");
      document.querySelector("#tabTabla").setAttribute("class", "d-none");
      document.querySelector("#tabTarjetas").setAttribute("class", "row");
    });
    const inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      const proyectosFiltrados = datos.filter((proyecto) => {
        for (const key in proyecto) {
          const valorCampo = proyecto[key];
          if (typeof valorCampo === "string" && valorCampo.toLowerCase().includes(textoBusqueda)) {
            return true;
          }
        }
        return false;
      });
      pintaTabla(proyectosFiltrados);
      pintaTarjetas(proyectosFiltrados);
    });
    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      inputBusqueda.value = "";
      pintaTabla(datos);
      pintaTarjetas(datos);
    });
    document.querySelector(".nav-tabs").addEventListener("click", (event) => {
      if (event.target.classList.contains("fichaMisProyectos")) {
        document.querySelector(".fichaMisProyectos").classList.add("active");
        document.querySelector(".fichaProyectos").classList.remove("active");
        misProyectos = true;
      } else {
        document.querySelector(".fichaProyectos").classList.add("active");
        document.querySelector(".fichaMisProyectos").classList.remove("active");
        misProyectos = false;
      }
      pintaTabla(datos);
      pintaTarjetas(datos);
    });
    document.querySelector("main").addEventListener("click", (event) => {
      let id = "";
      if (event.target.classList.contains("botonAdmin")) {
        const boton = event.target;
        const id2 = boton.dataset.id;
        if (boton.classList.contains("botonEditar")) {
          console.log("Editar proyecto " + id2);
          window.location = `#/proyectoEditar/${id2}`;
        } else if (boton.classList.contains("botonBorrar")) {
          alert("Borrar proyecto " + id2);
        }
      }
      if (event.target.tagName === "TD") {
        console.log("clic en td");
        id = event.target.parentNode.dataset.id;
        window.location = `#/proyectoDetalle/${id}`;
      }
      if (event.target.classList.contains("verDetalle")) {
        id = event.target.dataset.id;
        window.location = `#/proyectoDetalle/${id}`;
      }
    });
    if (usuario.rol === "registrado") {
      document.querySelector("#botonSubirProyecto").classList.add("disabled");
    }
  }
};
export {
  proyectosVista as default
};
