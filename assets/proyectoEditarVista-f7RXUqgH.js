import { p as proyectos } from "./datosPrueba-49L0HeBn.js";
import { P as Proyecto } from "./proyecto-DtCgKZBm.js";
import { U as User } from "./main-ot73n3aY.js";
const proyectoEditarVista = {
  template: (
    // html
    `
  <div class="container">
  <h1 class="mt-5">Edición de proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left router-link">
      Volver</bottom
    >
  </div>
  <form novalidate id="formularioEditarProyecto" action="" class="form">
    <div class="row mt-2">
      <div class="col-12 col-md-4 pt-2 mb-3">
        <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid" />
        <label class="form-label mt-2" for="urlImagen"
          ><strong>URL imagen: </strong></label
        >
        <input
          id="urlImagen"
          type="text"
          class="form-control"
          value="http://enlaceImagen.com"
        />
        <div class="invalid-feedback">
          No es una url correcta
        </div>
      </div>
      <div class="col-12 col-md-8">
        <!-- Formulario nuevo proyecto -->

        <!-- Nombre proyecto -->
        <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
        <input
          required
          id="nombreJuego"
          type="text"
          value="Nombre Autor"
          class="form-control"
        />
        <div class="invalid-feedback">
          Debe tener un nombre de proyecto
        </div>

        <!-- Descripción -->
        <label class="form-label mt-2" for="descripcion"
          ><strong>Descripción: </strong></label
        >
        <textarea id="descripcion" class="form-control" rows="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
        >

        <!-- Estado -->
        <label class="form-label mt-2" for="estado"
          ><strong>Estado: </strong></label
        >
        <select required id="estado" class="form-control">
          <option value="Cerrado">Cerrado</option>  
          <option value="En desarrollo">En desarrollo</option>
        </select>
        <div class="invalid-feedback">
          Debes definir un estado
        </div>

        <!-- Fecha -->
        <label class="form-label mt-2" for="fecha"
          ><strong>Fecha: </strong></label
        >
        <input id="fecha" type="date" class="form-control"  />
        <div class="invalid-feedback">
          El formato no es correcto
        </div>

        <!-- Enlace al proyecto -->
        <label class="form-label mt-2" for="enlace"
          ><strong>Enlace: </strong></label
        >
        <input
          id="enlace"
          type="url"
          class="form-control"
          value="http://enlace.com"
        />
        <div class="invalid-feedback">
          No es una url correcta
        </div>

        <!-- Repositorio -->
        <label class="form-label mt-2" for="repositorio"
          ><strong>Repositorio: </strong></label
        >
        <input
          id="repositorio"
          type="text"
          class="form-control"
          value="user.github.com/123456"
        />

        <!-- Submit -->
        <input
          id="subirProyecto"
          type="submit"
          class="btn btn-success mt-3"
          value="Actualizar proyecto"
        />
      </div>
    </div>
  </form>
</div>
  `
  ),
  script: (id) => {
    const proyectoArray = proyectos.filter((p) => p.id === id);
    const proyecto = proyectoArray[0];
    const fecha = proyecto.created_at;
    const fechaCorta = fecha.split("T")[0];
    document.querySelector("#imagenJuego").setAttribute("src", proyecto.imagen);
    document.querySelector("#urlImagen").value = proyecto.imagen;
    document.querySelector("#nombreJuego").value = proyecto.nombre;
    document.querySelector("#descripcion").value = proyecto.descripcion;
    document.querySelector("#estado").value = proyecto.estado;
    document.querySelector("#fecha").value = fechaCorta;
    console.log(fechaCorta);
    document.querySelector("#enlace").value = proyecto.enlace;
    document.querySelector("#repositorio").value = proyecto.repositorio;
    document.querySelector("#botonVolver").addEventListener("click", () => {
      window.history.back();
    });
    const inputUrl = document.querySelector("#urlImagen");
    inputUrl.addEventListener("input", () => {
      const imagen = document.querySelector("#imagenJuego");
      imagen.setAttribute("src", inputUrl.value);
    });
    const formulario = document.querySelector("#formularioEditarProyecto");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        enviaDatos();
      }
    });
    async function enviaDatos() {
      try {
        const user = await User.getUser();
        const userId = user.id;
        const proyectoEditado = {
          // Asignación de valores a las propiedades del proyecto
          imagen: document.querySelector("#urlImagen").value,
          nombre: document.querySelector("#nombreJuego").value,
          descripcion: document.querySelector("#descripcion").value,
          created_at: document.querySelector("#fecha").value,
          estado: document.querySelector("#estado").value,
          enlace: document.querySelector("#enlace").value,
          repositorio: document.querySelector("#repositorio").value,
          user_id: userId
        };
        const proyectoCreado = await Proyecto.create(proyectoEditado);
        alert("Proyecto creado con éxito", proyectoCreado.nombre);
        console.log("Enviando a la base de datos ", proyectoCreado);
        window.location = "#/proyectos";
      } catch (error) {
        alert("Error al crear el proyecto", error);
      }
    }
  }
};
export {
  proyectoEditarVista as default
};
