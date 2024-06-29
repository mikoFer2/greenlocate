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

// comentarios (seleccionar)
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

// comentarios (registrar)
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

// comentario (editar)
app.put('/api/update_comentario', async (req, res) => {
  try {
    const dataToUpdate = {
      Id_comentario: req.params.Id_comentario,
      Comentario: req.body.Comentario,
      Id_area: req.body.Id_area
    };

    const UPDATE_QUERY = `
      UPDATE comentario SET Comentario = ?, Id_area = ? WHERE Id_comentario = ?
    `;

    const data = await pool.query(UPDATE_QUERY, [
      dataToUpdate.Comentario,
      dataToUpdate.Id_area,
      dataToUpdate.Id_comentario
    ]);

    if (data.affectedRows === 0) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    res.json({
      data,
      status: 'OK',
      message: 'Comentario actualizado correctamente!'
    });

  } catch (error) {
    console.error('Error al actualizar datos de la base de datos:', error.message);
    res.status(500).json({ message: 'Error al actualizar datos de la base de datos.', error: error.message });
  }
});

// comentario (eliminar)
app.delete('/api/delete_comentario', async (req, res) => {
  try {
    const { Id_comentario } = req.params;

    const DELETE_QUERY = `
      DELETE FROM comentario WHERE Id_comentario = ?
    `;

    const data = await pool.query(DELETE_QUERY, [Id_comentario]);

    if (data.affectedRows === 0) {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }

    res.json({
      status: 'OK',
      message: 'Comentario eliminado correctamente!'
    });

  } catch (error) {
    console.error('Error al eliminar el comentario de la base de datos:', error.message);
    res.status(500).json({ message: 'Error al eliminar el comentario de la base de datos.', error: error.message });
  }
});


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

// areas verdes

app.get('/api/area_verdes', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
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
    can.id_area,
    can.tipo,
    can.metros_cuadrados,
    can.estado,
    col.id_columpio,
    col.estado,
    res.id_resenia,
    res.calificacion,
    maq.id_maquina,
    maq.estado,
    mes.id_mesa,
    mes.estado,
    resb.id_resbalin,
    resb.estado,
    pil.id_pileta,
    pil.estado
From
    area_verde ar 
    left join asiento ast ON ar.id_area = ast.id_areleft JOIN comentario com ON ar.id_area = com.id_area a 
    left join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal
    left join balancin bal on ar.id_area = bal.id_balancin
    left join cancha can on ar.id_area = can.id_area
    left join columpio col on ar.id_area = col.id_area
    left join resenia res on ar.id_area = res.id_area
    left join maquina_ejercicio maq on ar.id_area = maq.id_area
    left join mesa_ping_pong mes on ar.id_area = mes.id_area
    left join pileta pil on ar.id_area = pil.id_area
    left join resbalin resb on ar.id_area = resb.id_area
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

// usuarios (selecionar)

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
      rut: req.params.rut,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      tipo: req.body.tipo || "n/a",
      correo: req.body.email,
      contrasena: req.body.contrasena,
      idArea: req.body.idArea || "1111"
    };

    const UPDATE_QUERY = 'UPDATE `usuario` SET `Nombre` = ?, `Apellido` = ?, `Tipo` = ?, `Correo` = ?, `Contrasena` = ?, `Id_area` = ? WHERE `Rut` = ?';

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
    console.error('Error al actualizar datos de la base de datos:', error.message);
    res.status(500).json({ message: 'Error al actualizar datos de la base de datos.', error: error.message });
  }
});

// reseñas (seleccionar)
app.get('/api/resenias', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    ar.id_area,
    ar.tipo,
    ar.tamano,
    ar.estado,
    ar.longitud,
    ar.latitud,
    avg(res.calificacion)   
From
    area_verde ar join resenia res on ar.id_area = res.id_area
    GROUP BY ar.id_area,
    ar.tipo,
    ar.tamano,
    ar.estado,
    ar.longitud,
    ar.latitud
;
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

// reseña (editar)

app.put('/api/update_resenias', async (req, res) => {
  try {
    const { id } = req.params;
    const { calificacion } = req.body;
    
    if (!calificacion) {
      return res.status(400).json({ message: 'Por favor, proporcione todos los campos necesarios.' });
    }
    
    const UPDATE_QUERY = `
      UPDATE resenia
      SET calificacion = ?
      WHERE id_resenia = ?
    `;
    
    const [result] = await pool.query(UPDATE_QUERY, [calificacion, comentario, id]);
    
    if (result.affectedRows === 0) {
      throw new Error('No se encontró la reseña con el ID proporcionado.');
    }
    
    res.json({ message: 'Reseña actualizada correctamente.' });
  } catch (error) {
    console.error('Error al actualizar la reseña:', error.message);
    res.status(500).json({ message: 'Error al actualizar la reseña.', error: error.message });
  }
});

// reseña (eliminar)

app.delete('/api/delete_resenias', async (req, res) => {
  try {
    const { id } = req.params;
    
    const DELETE_QUERY = `
      DELETE FROM resenia
      WHERE id_resenia = ?
    `;
    
    const [result] = await pool.query(DELETE_QUERY, [id]);
    
    if (result.affectedRows === 0) {
      throw new Error('No se encontró la reseña con el ID proporcionado.');
    }
    
    res.json({ message: 'Reseña eliminada correctamente.' });
  } catch (error) {
    console.error('Error al eliminar la reseña:', error.message);
    res.status(500).json({ message: 'Error al eliminar la reseña.', error: error.message });
  }
});

// reseña (Crear)

app.post('/api/resenias', async (req, res) => {
  try {
    const { id_area, calificacion } = req.body;
    
    if (!id_area || !calificacion) {
      return res.status(400).json({ message: 'Por favor, proporcione todos los campos necesarios.' });
    }
    
    const INSERT_QUERY = `
      INSERT INTO resenia (id_area, calificacion)
      VALUES (?, ?)
    `;
    
    const [result] = await pool.query(INSERT_QUERY, [id_area, calificacion]);
    
    res.json({ message: 'Reseña creada correctamente.', id_resenia: result.insertId });
  } catch (error) {
    console.error('Error al crear la reseña:', error.message);
    res.status(500).json({ message: 'Error al crear la reseña.', error: error.message });
  }
});

// balacin (seleccionar)

app.get('/api/balancin', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    bal.id_balancin,
    bal.estado
FROM
    balancin bal JOIN area_verde ar ON ar.id_area = bal.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// Balancin (Crear)

app.post('/api/crear_balancin', async (req, res) => {
  try {
    const { id_area, id_balancin, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO balancin (id_area, id_balancin, estado)
      VALUES (?, ?, ?);
    `;
    
    await pool.query(INSERT_QUERY, [id_area, id_balancin, estado]);
    res.status(201).json({ message: 'Dato insertado exitosamente.' });
  } catch (error) {
    console.error('Error al insertar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al insertar dato en la base de datos.', error: error.message });
  }
});

// Balancin (Editar)

app.put('/api/update_balancin', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_balancin, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE balancin
      SET id_area = ?, id_balancin = ?, estado = ?
      WHERE id_balancin = ?;
    `;
    
    await pool.query(UPDATE_QUERY, [id_area, id_balancin, estado, id]);
    res.json({ message: 'Dato actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al actualizar dato en la base de datos.', error: error.message });
  }
});

// Balancin (Eliminar)
app.delete('/api/delete_balancin', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM balancin
      WHERE id_balancin = ?;
    `;
    
    await pool.query(DELETE_QUERY, [id]);
    res.json({ message: 'Dato eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al eliminar dato en la base de datos.', error: error.message });
  }
});

// asientos (selecionar)
app.get('/api/asientos', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    ast.id_asiento,
    ast.estado
FROM
    asiento ast JOIN area_verde ar ON ar.id_area = ast.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// asientos (Crear)

app.post('/api/crear_asiento', async (req, res) => {
  try {
    const { id_area, id_asiento, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO asiento (id_area, id_asiento, estado)
      VALUES (?, ?, ?);
    `;
    
    await pool.query(INSERT_QUERY, [id_area, id_asiento, estado]);
    res.status(201).json({ message: 'Dato insertado exitosamente.' });
  } catch (error) {
    console.error('Error al insertar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al insertar dato en la base de datos.', error: error.message });
  }
});

// asientos (editar)

app.put('/api/update_asiento', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_asiento, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE asiento
      SET id_area = ?, id_asiento = ?, estado = ?
      WHERE id_asiento = ?;
    `;
    
    await pool.query(UPDATE_QUERY, [id_area, id_asiento, estado, id]);
    res.json({ message: 'Dato actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al actualizar dato en la base de datos.', error: error.message });
  }
});

// asientos (eliminar)

app.delete('/api/delete_asiento', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM asiento
      WHERE id_asiento = ?;
    `;
    
    await pool.query(DELETE_QUERY, [id]);
    res.json({ message: 'Dato eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al eliminar dato en la base de datos.', error: error.message });
  }
});

// columpio (selecionar)

app.get('/api/columpio', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    col.id_columpio,
    col.estado
FROM
    columpio col JOIN area_verde ar ON ar.id_area = col.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// columpio (crear)

app.post('/api/crear_columpio', async (req, res) => {
  try {
    const { id_area, id_columpio, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO columpio (id_area, id_columpio, estado)
      VALUES (?, ?, ?);
    `;
    
    await pool.query(INSERT_QUERY, [id_area, id_columpio, estado]);
    res.status(201).json({ message: 'Dato insertado exitosamente.' });
  } catch (error) {
    console.error('Error al insertar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al insertar dato en la base de datos.', error: error.message });
  }
});

// columpio (editar)

app.put('/api/update_columpio', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_columpio, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE columpio
      SET id_area = ?, id_columpio = ?, estado = ?
      WHERE id_columpio = ?;
    `;
    
    await pool.query(UPDATE_QUERY, [id_area, id_columpio, estado, id]);
    res.json({ message: 'Dato actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al actualizar dato en la base de datos.', error: error.message });
  }
});

// columpio (eliminar)

app.delete('/api/delete_columpio', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM columpio
      WHERE id_columpio = ?;
    `;
    
    await pool.query(DELETE_QUERY, [id]);
    res.json({ message: 'Dato eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al eliminar dato en la base de datos.', error: error.message });
  }
});

// cancha (seleccionar)

app.get('/api/cancha', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    can.id_cancha,
    can.nombre,
    can.tipo,
    can.metros_cuadrados,
    can.estado
FROM
    cancha can JOIN area_verde ar ON ar.id_area = can.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// cancha (crear)

app.post('/api/crear_cancha', async (req, res) => {
  try {
    const { id_area, id_cancha, nombre, tipo, metros_cuadrados, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO cancha (id_area, id_cancha, nombre, tipo, metros_cuadrados, estado)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
    
    await pool.query(INSERT_QUERY, [id_area, id_cancha, nombre, tipo, metros_cuadrados, estado]);
    res.status(201).json({ message: 'Dato insertado exitosamente.' });
  } catch (error) {
    console.error('Error al insertar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al insertar dato en la base de datos.', error: error.message });
  }
});

// cancha (editar)

app.put('/api/update_cancha', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, nombre, tipo, metros_cuadrados, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE cancha
      SET id_area = ?, nombre = ?, tipo = ?, metros_cuadrados = ?, estado = ?
      WHERE id_cancha = ?;
    `;
    
    await pool.query(UPDATE_QUERY, [id_area, nombre, tipo, metros_cuadrados, estado, id]);
    res.json({ message: 'Dato actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al actualizar dato en la base de datos.', error: error.message });
  }
});

// cancha (eliminar)

app.delete('/api/delete_cancha', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM cancha
      WHERE id_cancha = ?;
    `;
    
    await pool.query(DELETE_QUERY, [id]);
    res.json({ message: 'Dato eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al eliminar dato en la base de datos.', error: error.message });
  }
});

// mesa de ping pong (seleccionar)

app.get('/api/mesa', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    mes.id_mesa,
    mes.estado
FROM
    mesa_ping_pong mes JOIN area_verde ar ON ar.id_area = mes.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// mesa de ping pong (crear)

app.post('/api/crear_mesa', async (req, res) => {
  try {
    const { id_area, id_mesa, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO mesa_ping_pong (id_area, id_mesa, estado)
      VALUES (?, ?, ?);
    `;
    
    await pool.query(INSERT_QUERY, [id_area, id_mesa, estado]);
    res.status(201).json({ message: 'Dato insertado exitosamente.' });
  } catch (error) {
    console.error('Error al insertar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al insertar dato en la base de datos.', error: error.message });
  }
});

// mesa de ping pong (editar)

app.put('/api/update_mesa', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_mesa, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE mesa_ping_pong
      SET id_area = ?, id_mesa = ?, estado = ?
      WHERE id_mesa = ?;
    `;
    
    await pool.query(UPDATE_QUERY, [id_area, id_mesa, estado, id]);
    res.json({ message: 'Dato actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al actualizar dato en la base de datos.', error: error.message });
  }
});

// mesa de ping pong (eliminar)

app.delete('/api/delete_mesa', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM mesa_ping_pong
      WHERE id_mesa = ?;
    `;
    
    await pool.query(DELETE_QUERY, [id]);
    res.json({ message: 'Dato eliminado exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar dato en la base de datos:', error.message);
    res.status(401).json({ message: 'Error al eliminar dato en la base de datos.', error: error.message });
  }
});

// maquina ejercicio (seleccionar)

app.get('/api/maquina', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    maq.id_maquina,
    maq.estado
FROM
    maquina_ejercicio maq JOIN area_verde ar ON ar.id_area = maq.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// maquina ejercicio (crear)

app.post('/api/crear_maquina', async (req, res) => {
  try {
    const { id_area, id_maquina, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO maquina_ejercicio (id_area, id_maquina, estado)
      VALUES (?, ?, ?)
    `;
    const result = await pool.query(INSERT_QUERY, [id_area, id_maquina, estado]);
    res.json({ message: 'Registro creado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al crear registro:', error.message);
    res.status(500).json({ message: 'Error al crear registro.', error: error.message });
  }
});

// maquina ejercicio (editar)

app.put('/api/update_maquina', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_maquina, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE maquina_ejercicio
      SET id_area = ?, id_maquina = ?, estado = ?
      WHERE id = ?
    `;
    const result = await pool.query(UPDATE_QUERY, [id_area, id_maquina, estado, id]);
    if (result.changedRows === 0) {
      throw new Error('No se encontró el registro para actualizar.');
    }
    res.json({ message: 'Registro actualizado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al actualizar registro:', error.message);
    res.status(500).json({ message: 'Error al actualizar registro.', error: error.message });
  }
});

// maquina ejercicio (eliminar)

app.delete('/api/delte_maquina', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM maquina_ejercicio
      WHERE id = ?
    `;
    const result = await pool.query(DELETE_QUERY, [id]);
    if (result.affectedRows === 0) {
      throw new Error('No se encontró el registro para eliminar.');
    }
    res.json({ message: 'Registro eliminado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al eliminar registro:', error.message);
    res.status(500).json({ message: 'Error al eliminar registro.', error: error.message });
  }
});

// pileta (Seleccionar)

app.get('/api/pileta', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    pil.id_pileta,
    pil.estado
FROM
    pileta pil JOIN area_verde ar ON ar.id_area = pil.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
    
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

// pileta (crear)

app.post('/api/crear_pileta', async (req, res) => {
  try {
    const { id_area, id_pileta, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO pileta (id_area, id_pileta, estado)
      VALUES (?, ?, ?)
    `;
    const result = await pool.query(INSERT_QUERY, [id_area, id_pileta, estado]);
    res.json({ message: 'Registro creado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al crear registro:', error.message);
    res.status(500).json({ message: 'Error al crear registro.', error: error.message });
  }
});

// pileta (editar)

app.put('/api/update_pileta', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_pileta, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE pileta
      SET id_area = ?, id_pileta = ?, estado = ?
      WHERE id = ?
    `;
    const result = await pool.query(UPDATE_QUERY, [id_area, id_pileta, estado, id]);
    if (result.changedRows === 0) {
      throw new Error('No se encontró el registro para actualizar.');
    }
    res.json({ message: 'Registro actualizado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al actualizar registro:', error.message);
    res.status(500).json({ message: 'Error al actualizar registro.', error: error.message });
  }
});

// pileta (eliminar)

app.delete('/api/delete_pileta', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM pileta
      WHERE id = ?
    `;
    const result = await pool.query(DELETE_QUERY, [id]);
    if (result.affectedRows === 0) {
      throw new Error('No se encontró el registro para eliminar.');
    }
    res.json({ message: 'Registro eliminado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al eliminar registro:', error.message);
    res.status(500).json({ message: 'Error al eliminar registro.', error: error.message });
  }
});

// resbalin (seleccionar)

app.get('/api/resbalin', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud,
    resb.id_resbalin,
    resb.estado
FROM
    resbalin resb JOIN area_verde ar ON ar.id_area = resb.id_area
    join unidad_vecinal uv on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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

// resbalin (crear)

app.post('/api/crear_resbalin', async (req, res) => {
  try {
    const { id_area, id_resbalin, estado } = req.body;
    const INSERT_QUERY = `
      INSERT INTO resbalin (id_area, id_resbalin, estado)
      VALUES (?, ?, ?)
    `;
    const result = await pool.query(INSERT_QUERY, [id_area, id_resbalin, estado]);
    res.json({ message: 'Registro creado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al crear registro:', error.message);
    res.status(500).json({ message: 'Error al crear registro.', error: error.message });
  }
});

// resbalin (editar)

app.put('/api/update_resbalin', async (req, res) => {
  try {
    const { id } = req.params;
    const { id_area, id_resbalin, estado } = req.body;
    const UPDATE_QUERY = `
      UPDATE resbalin
      SET id_area = ?, id_resbalin = ?, estado = ?
      WHERE id = ?
    `;
    const result = await pool.query(UPDATE_QUERY, [id_area, id_resbalin, estado, id]);
    if (result.changedRows === 0) {
      throw new Error('No se encontró el registro para actualizar.');
    }
    res.json({ message: 'Registro actualizado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al actualizar registro:', error.message);
    res.status(500).json({ message: 'Error al actualizar registro.', error: error.message });
  }
});

// resbalin (eliminar)

app.delete('/api/delete_resbalin', async (req, res) => {
  try {
    const { id } = req.params;
    const DELETE_QUERY = `
      DELETE FROM resbalin
      WHERE id = ?
    `;
    const result = await pool.query(DELETE_QUERY, [id]);
    if (result.affectedRows === 0) {
      throw new Error('No se encontró el registro para eliminar.');
    }
    res.json({ message: 'Registro eliminado correctamente.', affectedRows: result.affectedRows });
  } catch (error) {
    console.error('Error al eliminar registro:', error.message);
    res.status(500).json({ message: 'Error al eliminar registro.', error: error.message });
  }
});

// unidad vecinal (seleccionar)

app.get('/api/villa', async (req, res) => {
  try {
    const INSERT_QUERY = 
    `
    SELECT
    uv.nombre,
    ar.id_area,
    ar.longitud,
    ar.latitud
FROM
    unidad_vecinal uv JOIN area_verde ar on ar.id_unidad_vecinal = uv.id_unidad_vecinal;
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