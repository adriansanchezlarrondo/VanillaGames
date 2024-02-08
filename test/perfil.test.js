// Cargamos libreria de testing
import { expect } from 'chai'

// cargamos libreria de supabase
import { supabase } from '../src/bd/supabase.js'
// Cargamos la clase Perfil
import { Perfil } from '../src/bd/perfil.js'

// Datos para el nuevo perfil
const ArrayPerfiles = [
  {
    nombre: 'carrebola',
    apellidos: 'Yo mismo',
    rol: 'admin'
  },
  {
    nombre: 'Pepe',
    apellidos: 'Gotera',
    rol: 'registrado'
  },
  {
    nombre: 'Juan',
    apellidos: 'Eustaquio',
    rol: 'alumno'
  },
  {
    nombre: 'Iban',
    apellidos: 'A borrarme',
    rol: 'alumno'
  }
]

// Testeando la clase perfil
// Inicialmente no tenemos usuarios registrados así que Borramos toda la tabla perfil

try {
  const { data, error } = await supabase
    .from('perfiles')
    .delete()
    .is('user_id', null)
} catch (error) {
  console.error(error)
}

describe('************** Perfil: Crearemos 4 usuarios con diferentes rols. El último lo leerermos, modificaremos y borraremos', async function () {
  describe('getAll()', async function () {
    it('debería devolver un array de perfiles vacío', async function () {
      // Probamos el método getAll
      const perfiles = await Perfil.getAll()
      // Esperamos que devuelva un array
      expect(perfiles).to.be.an('array')
      // Esperamos que el array esté vacío
      expect(perfiles.length).to.equal(0)
    })
  })

  describe('create()', async function () {
    it('debería crear un nuevo perfil en la tabla "perfiles"', async function () {
      // Objeto que debería devolver tras crear el usuario
      const perfilDevuelto = {
        nombre: 'Iban',
        apellidos: 'A borrarme',
        user_id: null,
        estado: 'pendiente',
        rol: 'alumno',
        avatar: null
      }

      // Crear el nuevo perfil
      await Perfil.create(ArrayPerfiles[0])
      await Perfil.create(ArrayPerfiles[1])
      await Perfil.create(ArrayPerfiles[2])
      await Perfil.create(ArrayPerfiles[3])

      // Verificar que se ha creado el perfil correctamente. (Solo el último perfil)
      // Leemos todos los perfiles
      const perfiles = await Perfil.getAll()
      // Comprobamos que devuelve un array
      expect(perfiles).to.be.an('array')
      // Comprobamos que el array tiene 4 registros
      expect(perfiles.length).to.equal(4)
      // Comprobamos que el último registro tiene los datos del modelo esperado
      expect(perfiles[3]).to.include(perfilDevuelto)
    })
  })

  describe('getById()', function () {
    it('debería devolver el perfil con el ID correspondiente', async function () {
      // Capturamos todos los perfiles
      const perfiles = await Perfil.getAll()
      // Buscamos la posición del último registro
      const ultimoPerfil = perfiles.length - 1
      // capturamos su id
      const perfilId = perfiles[ultimoPerfil].id

      // Obtener el perfil por ID
      const perfil = await Perfil.getById(perfilId)
      // Esperamos que devuelva un instanicia de objeto
      expect(perfil).to.be.an.instanceof(Perfil)
      // Esperamos que el email coincida
      expect(perfil.email).equal(ArrayPerfiles[3].email)
    })
  })

  describe('actualizarPerfil', () => {
    it('debería actualizar el nombre y apellido del perfil', async () => {
      // Capturamos todos los perfiles
      const perfiles = await Perfil.getAll()
      // Buscamos la posición del último registro
      const ultimoPerfil = perfiles.length - 1
      // capturamos su id
      const perfilId = perfiles[ultimoPerfil].id

      // Obtener el perfil por ID
      const perfil = await Perfil.getById(perfilId)

      // Actualizamos los datos
      perfil.nombre = 'Jose'
      perfil.apellidos = 'GoteraNueva'

      // Llamamos al método actualizar
      await perfil.update()
      // Volvemos a leer el perfil modificado
      const perfilActualizado = await Perfil.getById(perfilId)

      // Esperamos que el nombre haya cambiado
      expect(perfilActualizado.nombre).to.equal('Jose')
      // Esperamos que el apellido haya cambiado
      expect(perfilActualizado.apellidos).to.equal('GoteraNueva')
    })
  })

  // Borrar perfil
  describe('borraPerfil', () => {
    it('debería borrar el último perfil creado', async () => {
      // Capturamos todos los perfiles
      let perfiles = await Perfil.getAll()
      // Buscamos la posición del último registro
      const ultimoPerfil = perfiles.length - 1
      // capturamos su id
      const perfilId = perfiles[ultimoPerfil].id

      // Obtener el perfil por ID
      const perfil = await Perfil.getById(perfilId)

      // Borramos el perfil
      const borrado = await Perfil.delete(perfilId)
      // Esperamos que el método devuelva true
      expect(borrado).to.equal(true)
      // verificamos que efectivamente hay un registro menos
      perfiles = await Perfil.getAll()
      expect(perfiles.length).to.equal(3)
    })
  })
})
