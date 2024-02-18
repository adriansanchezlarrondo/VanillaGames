import { s as supabase } from "./main-ot73n3aY.js";
class Proyecto {
  constructor({
    id = null,
    // ID único del Proyecto
    created_at = null,
    // Fecha de creación del Proyecto
    user_id = null,
    // ID del usuario asociado al Proyecto
    nombre = null,
    // Nombre del usuario
    apellidos = null,
    // Apellidos del usuario
    avatar = "default_avatar.png",
    // URL del avatar por defecto
    estado = "activo",
    // Estado del Proyecto (activo/inactivo, por ejemplo)
    rol = "registrado"
    // Rol del usuario (registrado, administrador, etc.)
  }) {
    this.id = id;
    this.created_at = created_at;
    this.user_id = user_id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.avatar = avatar;
    this.estado = estado;
    this.rol = rol;
  }
  static async getAll() {
    const { data: proyectos, error } = await supabase.from("proyectos").select("*").order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return proyectos.map((proyecto) => new Proyecto(proyecto));
  }
  // Método estático para obtener un proyecto por su ID
  static async getById(id) {
    const { data: proyecto, error } = await supabase.from("proyectos").select("*").eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return new Proyecto(proyecto[0]);
  }
  // Método estático para obtener un proyecto por el ID del usuario asociado
  static async getByUserId(userId) {
    const { data: proyecto, error } = await supabase.from("proyectos").select("*").eq("user_id", userId);
    if (error) {
      throw new Error(error.message);
    }
    return new Proyecto(proyecto[0]);
  }
  // Método estático para crear un nuevo proyecto
  static async create(proyectoData) {
    const { data, error } = await supabase.from("proyectos").insert(proyectoData).select();
    if (error) {
      throw new Error(`Error creando proyecto: ${error.message}`);
    }
    return data ? new Proyecto(data[0]) : null;
  }
  // Método estático para actualizar un proyecto existente por su ID
  static async update(id, newData) {
    const { error } = await supabase.from("proyectos").update(newData).eq("id", id);
    if (error) {
      throw new Error(`Error actualizando proyecto: ${error.message}`);
    }
    return true;
  }
}
export {
  Proyecto as P
};
