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

    `
}
