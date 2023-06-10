const conexion = require("../conexion");

module.exports = {
    insertar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into Usuario(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad) values (?,?, ?, ?,?,?)`,
                [id_nodo,ref_bancaria, email,genero,nombre,doc_identidad], (err, resultados) => {
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
    obtenerPorId(doc_identidad) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña from Estudiante where doc_identidad = ?`,
                [doc_identidad],
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
            id_nodo = ?,
            contraseña = ?
            where doc_identidad = ?`,
                [ref_bancaria, email,genero,nombre,id_nodo,contraseña,doc_identidad],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
    eliminar(idoc_identidad) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from Estudiante
            where doc_identidad= ?`,
                [doc_identidad],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}