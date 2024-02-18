import { s as supabase } from "./main-ot73n3aY.js";
class Perfil {
  constructor({
    id = null,
    // ID único del perfil
    created_at = null,
    // Fecha de creación del perfil
    user_id = null,
    // ID del usuario asociado al perfil
    nombre = null,
    // Nombre del usuario
    apellidos = null,
    // Apellidos del usuario
    avatar = "default_avatar.png",
    // URL del avatar por defecto
    estado = "activo",
    // Estado del perfil (activo/inactivo, por ejemplo)
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
  // Método estático para obtener todos los perfiles
  static async getAll() {
    const { data: perfiles, error } = await supabase.from("perfiles").select("*").order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return perfiles.map((perfil) => new Perfil(perfil));
  }
  // Método estático para obtener un perfil por su ID
  static async getById(id) {
    const { data: perfil, error } = await supabase.from("perfiles").select("*").eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    return new Perfil(perfil[0]);
  }
  // Método estático para obtener un perfil por el ID del usuario asociado
  static async getByUserId(userId) {
    const { data: perfil, error } = await supabase.from("perfiles").select("*").eq("user_id", userId);
    if (error) {
      throw new Error(error.message);
    }
    return new Perfil(perfil[0]);
  }
  // Método estático para crear un nuevo perfil
  static async create(perfilData) {
    const { data, error } = await supabase.from("perfiles").insert(perfilData).select();
    if (error) {
      throw new Error(`Error creando perfil: ${error.message}`);
    }
    return data ? new Perfil(data[0]) : null;
  }
  // Método estático para actualizar un perfil existente por su ID
  static async update(id, newData) {
    const { error } = await supabase.from("perfiles").update(newData).eq("id", id);
    if (error) {
      throw new Error(`Error actualizando perfil: ${error.message}`);
    }
    return true;
  }
}
export {
  Perfil as P
};
