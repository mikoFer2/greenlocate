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
  const [rows] = await pool.query('SELECT * FROM area_verde')
  res.json(rows)
})

app.post('/get_pass', async (req, res) => {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Contrasena FROM usuario WHERE rut = ?';
    const [rows] = await pool.query(INSERT_QUERY, [user])
    res.json(rows)
  })

app.post('/get_user', async (req, res) => {
    const { user } = req.body
    const INSERT_QUERY = 'SELECT Rut FROM greenlocate.usuario WHERE Rut = ?';
    const [rows] = await pool.query(INSERT_QUERY, [user])
    res.json(rows)
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