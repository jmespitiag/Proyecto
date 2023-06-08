const conexion = require("../conexion");

module.exports = {
    insertar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into Estudiante(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña) values (?,?, ?, ?,?,?,?)`,
                [id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña from Estudiante`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    obtenerPorId(id_nodo) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña from Estudiante where id_nodo = ?`,
                [id_nodo],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    actualizar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña) {
        return new Promise((resolve, reject) => {
            conexion.query(`update Estudiante
            set ref_bancaria = ?,
            email = ?,
            genero= ?,
            nombre = ?,
            doc_identidad = ?,
            contraseña = ?
            where id_nodo = ?`,
                [ref_bancaria, email,genero,nombre,doc_identidad,contraseña,id_nodo],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
    eliminar(id_nodo) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from Estudiante
            where id_nodo= ?`,
                [id_nodo],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}