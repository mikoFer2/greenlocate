const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

//importar rutas
const usuarioRoutes = require('./routes/usuario');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'pages'));

//middlewares
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Ea6274990',
    port: 3306,
    database: 'BD_Greenlocate'
}, 'single'));


//routes
app.use('/', usuarioRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting serve
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});