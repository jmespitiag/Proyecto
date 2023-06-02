const conexion = require("../conexion");

module.exports = {
    insertar(doc_id,nombre, email, telefono, area_p, area_a, contraseña) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into Profesor(doc_id,nombre, email, telefono, area_p, area_a, contraseña) values (?,?, ?, ?,?,?,?)`,
                [doc_id,nombre, email, telefono, area_p, area_a, contraseña], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select doc_id, nombre, email, telefono, area_p, area_a, contraseña from Profesor`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    obtenerPorId(doc_id) {
        return new Promise((resolve, reject) => {
            conexion.query(`select doc_id,nombre, email, telefono, area_p, area_a, contraseña from Profesor where doc_id = ?`,
                [doc_id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    actualizar(doc_id, nombre, email, telefono, area_p, area_a, contraseña) {
        return new Promise((resolve, reject) => {
            conexion.query(`update Profesor
            set nombre = ?,
            email = ?,
            telefono = ?,
            area_p = ?,
            area_a = ?,
            contraseña = ?,
            where doc_id = ?`,
                [nombre,email, telefono, area_p, area_a, contraseña, doc_id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
    eliminar(doc_id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from Profesor
            where doc_id = ?`,
                [doc_id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}