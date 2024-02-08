import { expect } from 'chai'

import { User } from '../src/bd/user.js'

// cargamos libreria de supabase
import { supabase } from '../src/bd/supabase.js'

describe('Pruebas para la Clase User', function () {
  let usuarioCreado // Variable para almacenar el usuario creado durante las pruebas

  describe('create()', function () {
    it('debería crear un nuevo usuario', async function () {
      const datosUsuario = { email: 'test@example.com', password: 'testPassword' }

      usuarioCreado = await User.create(datosUsuario)

      expect(usuarioCreado).to.be.an.instanceOf(User)
      expect(usuarioCreado.email).to.equal('test@example.com')
    })
  })

  describe('login()', function () {
    it('debería iniciar sesión de un usuario existente', async function () {
      expect(usuarioCreado).to.be.an.instanceOf(User)

      const datosLogin = { email: 'test@example.com', password: 'testPassword' }

      const usuarioLogueado = await User.login(datosLogin)

      expect(usuarioLogueado).to.be.an.instanceOf(User)
      expect(usuarioLogueado.email).to.equal('test@example.com')
    })
  })

  describe('getUser()', function () {
    it('debería devolver el usuario logueado', async function () {
      // Supongamos que 'usuarioLogueado' es el usuario que se espera obtener al estar logueado
      const usuarioLogueado = await User.getUser()

      // Verificamos que se haya obtenido el usuario esperado
      expect(usuarioLogueado).to.exist // Aseguramos que haya un usuario logueado
      expect(usuarioLogueado).to.be.an.instanceOf(User) // Verificamos que sea una instancia de User

      // Verificamos la propiedad 'email' del usuario logueado
      expect(usuarioLogueado.email).to.equal('test@example.com') // Reemplaza 'correo@example.com' con el email esperado del usuario logueado
    })
  })

  describe('logout()', function () {
    it('debería cerrar sesión del usuario actual', async function () {
      const sesionCerrada = await User.logout()

      expect(sesionCerrada).to.equal(true)
    })
  })

  describe('getUser()', function () {
    it('debería devolver undefined si no hay usuario logueado', async function () {
      // Supongamos que 'usuarioLogueado' es el usuario que se espera obtener al estar logueado
      const usuarioLogueado = await User.getUser()

      // Verificamos que el usuario logueado sea undefined, indicando que no hay sesión activa
      expect(usuarioLogueado).to.equal(undefined)
      // También podríamos usar:
      // expect(usuarioLogueado).to.be.undefined;
      // o
      // expect(usuarioLogueado).to.not.exist;
    })
  })
})
