CREATE DATABASE Proyecto;

use Proyecto;

CREATE TABLE Usuario(
	doc_identidad INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
    genero VARCHAR(50),
    email VARCHAR(50),
    id_nodo INT NOT NULL,
    ref_bancaria INT
);

CREATE TABLE Curso(
	id_curso INT NOT NULL PRIMARY KEY,
    Nombre VARCHAR(50),
    categoria VARCHAR(50),
    url VARCHAR(50),
    fecha_inicio DATE,
    fecha_fin DATE,
    precio INT,
    semestre INT
);

CREATE TABLE Profesor(
	doc_id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50),
    telefono INT,
    area_p VARCHAR(50),
    area_a VARCHAR(50),
    contraseña VARCHAR(50)
);

CREATE TABLE Estudiante(
	ref_bancaria INT,
    id_nodo INT NOT NULL PRIMARY KEY,
    email VARCHAR(50),
    genero VARCHAR(50),
    nombre VARCHAR(50),
    doc_identidad INT NOT NULL,
    FOREIGN KEY (doc_identidad) REFERENCES Usuario(doc_identidad)
    ON UPDATE CASCADE ON DELETE CASCADE,
    contraseña VARCHAR(50)
);

CREATE TABLE Material (
	id_mat INT NOT NULL PRIMARY KEY,
    titulo VARCHAR(50),
    descripcion VARCHAR(50),
    archivo VARCHAR(50)
);

CREATE TABLE Tarea(
	id_tarea INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50),
    fecha_c DATE,
    fecha_e DATE,
    archivo VARCHAR(50),
    puntaje INT
);

CREATE TABLE Foro(
	id_foro INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion VARCHAR(50),
    fecha_cr DATE,
    fecha_t DATE
);

CREATE TABLE Mensaje(
	id_mensaje INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
	descripcion VARCHAR(50),
    id_replica INT
);

CREATE TABLE Administrador(
	id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(50)
);

CREATE TABLE Consulta(
	doc_id INT NOT NULL,
    id_curso INT NOT NULL,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (doc_id,id_curso)
);

CREATE TABLE Paga(
	doc_identidad INT NOT NULL,
    id_curso INT NOT NULL,
    matricula INT,
    contraseña VARCHAR(50),
    FOREIGN KEY (doc_identidad) REFERENCES Usuario(doc_identidad)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (doc_identidad,id_curso)
);

CREATE TABLE Visualizar(
	id_nodo INT NOT NULL,
    id_mat INT NOT NULL,
    FOREIGN KEY (id_nodo) REFERENCES Estudiante(id_nodo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_mat) REFERENCES Material(id_mat)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_nodo,id_mat)
);

CREATE TABLE Ver(
	id_nodo INT NOT NULL,
    id_tarea INT NOT NULL,
    FOREIGN KEY (id_nodo) REFERENCES Estudiante(id_nodo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_tarea) REFERENCES Tarea(id_tarea)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_nodo,id_tarea)
);

CREATE TABLE Entregar(
	id_nodo INT NOT NULL,
    id_tarea INT NOT NULL,
    FOREIGN KEY (id_nodo) REFERENCES Estudiante(id_nodo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_tarea) REFERENCES Tarea(id_tarea)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_nodo,id_tarea)
);


CREATE TABLE Participa(
	id_nodo INT NOT NULL,
    id_foro INT NOT NULL,
    FOREIGN KEY (id_nodo) REFERENCES Estudiante(id_nodo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_foro) REFERENCES Foro(id_foro)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_nodo,id_foro)
);

CREATE TABLE Dicta(
	id_curso INT NOT NULL,
    doc_id INT NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_curso,doc_id)
);

CREATE TABLE Asigna(
	doc_id INT NOT NULL,
    id INT NOT NULL,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id) REFERENCES Administrador(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (doc_id,id)
);

CREATE TABLE Gestiona(
	id_mat INT NOT NULL,
    doc_id INT NOT NULL,
    FOREIGN KEY (id_mat) REFERENCES Material(id_mat)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_mat,doc_id)
);

CREATE TABLE Encarga(
	id_tarea INT NOT NULL,
    doc_id INT NOT NULL,
    FOREIGN KEY (id_tarea) REFERENCES Tarea(id_tarea)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_tarea,doc_id)
);

CREATE TABLE Administra(
	id_foro INT NOT NULL,
    doc_id INT NOT NULL,
    FOREIGN KEY (id_foro) REFERENCES foro(id_foro)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_foro,doc_id)
);

CREATE TABLE Remite(
	id_mensaje INT NOT NULL,
    doc_id INT NOT NULL,
    FOREIGN KEY (id_mensaje) REFERENCES Mensaje(id_mensaje)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (doc_id) REFERENCES Profesor(doc_id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_mensaje,doc_id)
);

CREATE TABLE Recibe(
	id_mensaje INT NOT NULL,
    id_foro INT NOT NULL,
    FOREIGN KEY (id_mensaje) REFERENCES Mensaje(id_mensaje)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_foro) REFERENCES Foro(id_foro)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_mensaje,id_foro)
);

CREATE TABLE Envia(
	id_mensaje INT NOT NULL,
    id_nodo INT NOT NULL,
    FOREIGN KEY (id_mensaje) REFERENCES Mensaje(id_mensaje)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_nodo) REFERENCES Estudiante(id_nodo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_mensaje,id_nodo)
);

CREATE TABLE Tiene(
	id_foro INT NOT NULL,
    id_curso INT NOT NULL,
    FOREIGN KEY (id_foro) REFERENCES Foro(id_foro)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
    ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (id_foro,id_curso)
);


    
