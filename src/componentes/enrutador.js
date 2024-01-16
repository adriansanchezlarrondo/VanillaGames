export const enrutador = {
  rutas: {
    home: import('../vistas/homeVista.js'),
    // Usuarios
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    // Proyectos
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },
  router: () => {},
  observadorRutas: () => {}
}
