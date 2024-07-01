import express from 'express'
import { pool } from './db.js'
import {PORT} from './config.js'
import cors from 'cors'

import bodyParser from 'body-parser' //obligatario para parsear datos, sino da problemas de sintaxis sql

const app = express()

// Permitir solicitudes desde todos los dominios
app.use(cors())
app.use(bodyParser.json())

//acá se crean las acciones a bbdd
app.get('/get_data_area_verde', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM area_verde')
  res.json(rows)
})

app.get('/api/comentarios', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
      SELECT
      com.id_comentario,
      com.comentario,
      uv.nombre,
      ar.id_area
      FROM
      comentario com JOIN area_verde ar ON com.id_area = ar.id_area
      join unidad_vecinal uv on uv.id_unidad_vecinal = ar.id_unidad_vecinal
    `
    const data = await pool.query(INSERT_QUERY)
      
    //Se valida existencia de data en servidor
    if (data[0].length === 0) {
        throw new Error('No se encontraron datos en la base de datos.')
    }
    res.json(data)

  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message)
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
  }
})

app.post('/api/register_user', async (req, res) => {
  try {
    const dataToRegister = {
      rut: req.body.rut,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      tipo: "n/a",
      correo: req.body.email,
      contrasena: req.body.contrasena,
      idArea: "1111"
    }

    const INSERT_QUERY = 'INSERT INTO `usuario` (`Rut`, `Nombre`, `Apellido`, `Tipo`, `Correo`,`Contrasena`,`Id_area`) VALUES (?,?,?,?,?,?,?)'

    const data = await pool.query(INSERT_QUERY, [
      dataToRegister.rut, 
      dataToRegister.nombre,
      dataToRegister.apellido,
      dataToRegister.tipo,
      dataToRegister.correo,
      dataToRegister.contrasena,
      dataToRegister.idArea
    ])

    res.json({
      data,
      status: 'OK',
      message: 'Usuario, ' + dataToRegister.nombre + ' registrado correctamente!'
    })

  }catch (error){
    console.error('Error al obtener datos de la base de datos:', error.message)
    res.status(409).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
  }
})

app.post('/api/add_comment', async (req, res) => {
  try {
    const dataToRegister = {
      Id_comentario: req.body.Id_comentario,
      Comentario: req.body.Comentario,
      Id_area: req.body.Id_area
    }

    const INSERT_QUERY = `
      INSERT INTO comentario (Id_comentario, Comentario, Id_area) VALUES
      (?, ?, ?)
      `

    const data = await pool.query(INSERT_QUERY, [
      dataToRegister.Id_comentario, 
      dataToRegister.Comentario,
      dataToRegister.Id_area
    ])

    res.json({
      data,
      status: 'OK',
      message: 'Comentario registrado correctamente!'
    })

  }catch (error){
    console.error('Error al obtener datos de la base de datos:', error.message)
    res.status(409).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
  }
})

app.get('/api/usuarios', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    rut,
    nombre,
    apellido,
    correo
FROM
    usuario
    `
    const data = await pool.query(INSERT_QUERY)
      
    //Se valida existencia de data en servidor
    if (data[0].length === 0) {
        throw new Error('No se encontraron datos en la base de datos.')
    }
    res.json(data)

  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message)
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
  }
});

// usuarios (editar)

app.put('/api/update_usuario', async (req, res) => {
  try {
    const dataToUpdate = {
      rut: req.body.rut,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      tipo: req.body.tipo || "n/a",
      correo: req.body.email,
      contrasena: req.body.contrasena,
      idArea: req.body.idArea || "1111"
    };

    const UPDATE_QUERY = `
      UPDATE usuario 
      SET 
      Nombre = ?, 
      Apellido = ?, 
      Tipo = ?, 
      Correo = ?, 
      Contrasena = ?, 
      Id_area = ? 
      WHERE 
      Rut = ?;
    `

    const data = await pool.query(UPDATE_QUERY, [
      dataToUpdate.nombre,
      dataToUpdate.apellido,
      dataToUpdate.tipo,
      dataToUpdate.correo,
      dataToUpdate.contrasena,
      dataToUpdate.idArea,
      dataToUpdate.rut
    ]);

    if (data.affectedRows === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({
      data,
      status: 'OK',
      message: 'Usuario, ' + dataToUpdate.nombre + ' actualizado correctamente!'
    });

  } catch (error) {
    console.error('Error al actualizar usuario:', error.message);
    res.status(500).json({ message: 'Error al actualizar datos de la base de datos.', error: error.message });
  }
})

app.get('/api/area_verdes', async (req, res) => {
  try {
    const INSERT_QUERY = `
      SELECT
        ar.id_area,
        ar.tipo,
        ar.tamano,
        ar.estado,
        ar.longitud,
        ar.latitud,
        uv.nombre as nombre_villa,
        com.comentario,
        ast.id_asiento,
        ast.estado as Estado_asiento,
        bal.id_balancin,
        bal.estado,
        can.id_area as id_area_cancha,
        can.tipo as tipo_cancha,
        can.metros_cuadrados,
        can.estado as estado_cancha,
        col.id_columpio,
        col.estado as estado_columpio,
        res.id_resenia,
        res.calificacion,
        maq.id_maquina,
        maq.estado as estado_maquina,
        mes.id_mesa,
        mes.estado as estado_mesa,
        resb.id_resbalin,
        resb.estado as estado_resbalin,
        pil.id_pileta,
        pil.estado as estado_pileta
    FROM
        area_verde ar 
        LEFT JOIN asiento ast ON ar.id_area = ast.id_area
        LEFT JOIN comentario com ON ar.id_area = com.id_area
        LEFT JOIN unidad_vecinal uv ON ar.id_unidad_vecinal = uv.id_unidad_vecinal
        LEFT JOIN balancin bal ON ar.id_area = bal.id_area
        LEFT JOIN cancha can ON ar.id_area = can.id_area
        LEFT JOIN columpio col ON ar.id_area = col.id_area
        LEFT JOIN resenia res ON ar.id_area = res.id_area
        LEFT JOIN maquina_ejercicio maq ON ar.id_area = maq.id_area
        LEFT JOIN mesa_ping_pong mes ON ar.id_area = mes.id_area
        LEFT JOIN pileta pil ON ar.id_area = pil.id_area
        LEFT JOIN resbalin resb ON ar.id_area = resb.id_area;

      `

    const data = await pool.query(INSERT_QUERY)

    res.json({
      data,
      status: 'OK',
      message: 'Comentario registrado correctamente!'
    })

  }catch (error){
    console.error('Error al obtener datos de la base de datos:', error.message)
    res.status(409).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
  }
})

app.post('/api/get_pass', async (req, res) => {
  try {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Contrasena FROM usuario WHERE rut = ?'
    const data = await pool.query(INSERT_QUERY, [user])
      
    if (data[0].length === 0) {
        // Simulando un error cuando no hay datos en la base de datos
        throw new Error('No se encontraron datos en la base de datos.')
    }
    res.json(data[0])

  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message)
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
  }
})

app.post('/get_pass', async (req, res) => {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Contrasena FROM usuario WHERE rut = ?'
    const [rows] = await pool.query(INSERT_QUERY, [user])
    res.json(rows)
  })

app.post('/api/get_user', async (req, res) => {
  try {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Rut FROM greenlocate.usuario WHERE Rut = ?'
    const data = await pool.query(INSERT_QUERY, [user])
      
    if (data[0].length === 0) {
        // Simulando un error cuando no hay datos en la base de datos
        throw new Error('No se encontraron datos en la base de datos.')
    }
    res.json(data[0])
  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message)
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message })
    
  }
})

app.get('/get_data_usuarios', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM usuario')
    res.json(rows)
  })

app.get('/show_tables', async (req, res) => {
  const result = await pool.query('SHOW TABLES')
  res.json(result)
})

//prueba de conexion
app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`)
  res.json(result[0])
})

app.listen(PORT)
console.log('Server on port', PORT)