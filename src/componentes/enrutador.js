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
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]

    // capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componenteVista = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componenteVista) {
      // Obtenemos el objeto del componente (que fué exportado como default)
      const vista = await componenteVista.default
      // inyectamos vista y ejecutamos su script
      document.querySelector('main').innerHTML = vista.template
      // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
      vista.script(parametro)
    } else {
      // Si la vista no existe cargamos la página de error
      window.location = '#/404'
    }
  },
  observadorRutas: () => {
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        window.history.pushState({ path: href }, '', href)
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })

    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }
}
