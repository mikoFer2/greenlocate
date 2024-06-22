import express from 'express'
import { pool } from './db.js'
import {PORT} from './config.js'
import cors from 'cors'

import bodyParser from 'body-parser' //obligatario para parsear datos, sino da problemas de sintaxis sql

const app = express()

// Permitir solicitudes desde todos los dominios
app.use(cors());
app.use(bodyParser.json());

//acá se crean las acciones a bbdd
app.get('/get_data_area_verde', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM area_verde');
  res.json(rows);
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
      join unidad_vecinal uv on uv.id_unidad_vecinal = ar.id_unidad_vecinal;
    `
    const data = await pool.query(INSERT_QUERY)
      
    //Se valida existencia de data en servidor
    if (data[0].length === 0) {
        throw new Error('No se encontraron datos en la base de datos.');
    }
    res.json(data);

  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message);
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message });
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
    };

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
    console.error('Error al obtener datos de la base de datos:', error.message);
    res.status(409).json({ message: 'Error al obtener datos de la base de datos.', error: error.message });
  }
})

app.post('/api/get_pass', async (req, res) => {
  try {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Contrasena FROM usuario WHERE rut = ?';
    const data = await pool.query(INSERT_QUERY, [user])
      
    if (data[0].length === 0) {
        // Simulando un error cuando no hay datos en la base de datos
        throw new Error('No se encontraron datos en la base de datos.');
    }
    res.json(data[0]);

  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message);
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message });
  }
});

app.post('/get_pass', async (req, res) => {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Contrasena FROM usuario WHERE rut = ?';
    const [rows] = await pool.query(INSERT_QUERY, [user])
    res.json(rows)
  })

app.post('/api/get_user', async (req, res) => {
  try {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Rut FROM greenlocate.usuario WHERE Rut = ?';
    const data = await pool.query(INSERT_QUERY, [user])
      
    if (data[0].length === 0) {
        // Simulando un error cuando no hay datos en la base de datos
        throw new Error('No se encontraron datos en la base de datos.');
    }
    res.json(data[0]);
  } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error.message);
      res.status(401).json({ message: 'Error al obtener datos de la base de datos.', error: error.message });
    
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
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  res.json(result[0])
})

app.listen(PORT)
console.log('Server on port', PORT)