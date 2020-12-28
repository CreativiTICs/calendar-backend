const express = require('express');
require('dotenv').config();
const cors = require("cors");
const { dbConnection } = require('./db/config');

//Crear el server de express
const app = express();

//Base de Datos
dbConnection();

//CORS
app.use(cors());

//Public Dir
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Server corriendo en puerto ${process.env.PORT}`);
})