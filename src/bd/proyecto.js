import { supabase } from './supabase'

/* eslint-disable camelcase */
export class Proyecto {
  constructor ({
    id = null, // ID único del Proyecto
    created_at = null, // Fecha de creación del Proyecto
    user_id = null, // ID del usuario asociado al Proyecto
    nombre = null, // Nombre del usuario
    apellidos = null, // Apellidos del usuario
    avatar = 'default_avatar.png', // URL del avatar por defecto
    estado = 'activo', // Estado del Proyecto (activo/inactivo, por ejemplo)
    rol = 'registrado' // Rol del usuario (registrado, administrador, etc.)
  }) {
    this.id = id
    this.created_at = created_at
    this.user_id = user_id
    this.nombre = nombre
    this.apellidos = apellidos
    this.avatar = avatar
    this.estado = estado
    this.rol = rol
  }

  static async getAll () {
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*') // Selecciona todas las columnas
      .order('created_at', { ascending: false }) // Ordena por fecha de creación descendente

    // Manejo de errores: lanza una excepción si ocurre algún error
    if (error) {
      throw new Error(error.message)
    }

    // Mapea los proyectos obtenidos a instancias de la clase Proyecto y los devuelve
    return proyectos.map((proyecto) => new Proyecto(proyecto))
  }

  // Método estático para obtener un proyecto por su ID
  static async getById (id) {
    // Realiza una consulta para obtener un proyecto por su ID
    const { data: proyecto, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('id', id) // Filtra por el ID especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Proyecto con la información obtenida
    return new Proyecto(proyecto[0])
  }

  // Método estático para obtener un proyecto por el ID del usuario asociado
  static async getByUserId (userId) {
    // Realiza una consulta para obtener un proyecto por el ID de usuario asociado
    const { data: proyecto, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('user_id', userId) // Filtra por el ID de usuario especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Proyecto con la información obtenida
    return new Proyecto(proyecto[0])
  }

  // Método estático para crear un nuevo proyecto
  static async create (proyectoData) {
    // Inserta un nuevo proyecto en la base de datos con los datos proporcionados
    const { data, error } = await supabase
      .from('proyectos')
      .insert(proyectoData) // Inserta los datos del nuevo proyecto
      .select() // Devuelve los datos insertados

    // Manejo de errores
    if (error) {
      throw new Error(`Error creando proyecto: ${error.message}`)
    }

    // Si se insertaron datos, devuelve una nueva instancia de Proyecto con los datos insertados
    return data ? new Proyecto(data[0]) : null
  }

  // Método estático para actualizar un proyecto existente por su ID
  static async update (id, newData) {
    // Actualiza un proyecto existente en la base de datos con los nuevos datos
    const { error } = await supabase
      .from('proyectos')
      .update(newData) // Actualiza con los nuevos datos proporcionados
      .eq('id', id) // Filtra por el ID del proyecto a actualizar

    // Manejo de errores
    if (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`)
    }

    // Si la actualización fue exitosa, devuelve true
    return true
  }
}
