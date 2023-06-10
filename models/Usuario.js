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
            conexion.query(`select id_nodo,ref_bancaria, email,genero,nombre,doc_identidad from Usuario`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    obtenerPorId(doc_identidad) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id_nodo,ref_bancaria, email,genero,nombre,doc_identidad from Usuario where doc_identidad = ?`,
                [doc_identidad],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    actualizar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad) {
        return new Promise((resolve, reject) => {
            conexion.query(`update Usuario
            set ref_bancaria = ?,
            email = ?,
            genero= ?,
            nombre = ?,
            id_nodo = ?,
            where doc_identidad = ?`,
                [ref_bancaria, email,genero,nombre,id_nodo,doc_identidad],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
    eliminar(doc_identidad) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from Usuario
            where doc_identidad= ?`,
                [doc_identidad],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}