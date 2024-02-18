import { U as User, l as ls, h as header } from "./main-ot73n3aY.js";
import { P as Perfil } from "./perfil-YEn7WzTE.js";
const loginVista = {
  template: (
    // html
    `
    <div class="container mt-5">
      <div class="row justify-content-center">
          <div class="col-md-4">
              <h1 class="text-center mb-5 fw-light">Iniciar Sesión</h1>
              <div class="card rounded-0">
                  <div class="card-body">
                      <form id="formulario" action="proyecto.html">
                          <div class="mb-3">
                              <label for="email" class="form-label">Email:</label>
                              <input id="email" name="email" value="ejemplo@email.com" required type="email" class="form-control" />
                          </div>
                          <div class="mb-3">
                              <label for="password" class="form-label">Contraseña:</label>
                              <input type="password" name="password" class="form-control rounded-0" id="password">
                          </div>
                          <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">Recordar Sesión</label>
                          </div>
                          <div class="text-end mb-3">
                            <a href="#">¿Has olvidado la contraseña?</a>
                          </div>
                          <button type="submit" class="btn btn-primary rounded-0 w-100">Iniciar Sesión</button>
                      </form>
                  </div>
              </div>
              <div class="mt-5 text-center border border-secondary bg-secondary py-2">
                <a href="registro.html" class="link-underline link-underline-opacity-0 text-dark">¿Eres nuevo? Regístrate</a>
              </div>
          </div>
      </div>
    </div>
    `
  ),
  script: () => {
    console.log("vista login cargada");
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
        console.log("No valida");
      } else {
        enviarDatos(formulario);
      }
    });
    async function enviarDatos(formulario2) {
      try {
        const user = {
          email: formulario2.email.value,
          password: formulario2.password.value
        };
        User.logout();
        const usuarioLogueado = await User.login(user);
        console.log("¡login correcto!", usuarioLogueado);
        console.log("usuarioLogueado", usuarioLogueado);
        const userId = usuarioLogueado.id;
        console.log("userId", userId);
        const perfilLogueado = await Perfil.getByUserId(userId);
        console.log("Perfil logueado", perfilLogueado);
        const usuario = {
          email: usuarioLogueado.email,
          rol: perfilLogueado.rol,
          avatar: perfilLogueado.avatar
        };
        console.log("perfil localstorage", usuario);
        ls.setUsuario(usuario);
        window.location = "#/proyectos";
        header.script();
      } catch (error) {
        console.log("Error al iniciar sesión", error);
        alert("El usuario no existe o la contraseña no es correcta", error);
      }
    }
  }
};
export {
  loginVista as default
};
