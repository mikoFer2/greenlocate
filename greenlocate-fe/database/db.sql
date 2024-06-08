CREATE DATABASE BD_Greenlocate;

use BD_Greenlocate;

CREATE TABLE usuario (
    Rut varchar(13) PRIMARY KEY,
    Nombre varchar(80) NOT NULL,
    Apellido varchar(80) NOT NULL,
    Tipo varchar(10) NOT NULL,
    Correo varchar(50) NOT NULL,
    Contrasena varchar(20) NOT NULL,
    Id_area varchar(10) NOT NULL
);

show tables;

describe usuario;

