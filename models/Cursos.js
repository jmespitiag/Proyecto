const conexion = require("../conexion");

module.exports = {
  listar() {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT Nombre, categoria,id_curso FROM Curso', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
  listarNombre(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT Nombre FROM Curso WHERE Curso.id_curso = ?',
        [id_curso],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length > 0) {
              const nombre = results[0].Nombre;
              resolve(nombre);
            } else {
              resolve(null); 
            }
          }
        }
      );
    });
  },
  
  listarProfesor(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT Profesor.nombre, Profesor.email FROM Profesor INNER JOIN Dicta ON Profesor.doc_id = Dicta.doc_id INNER JOIN Curso ON Dicta.id_curso = Curso.id_curso WHERE Curso.id_curso = ?',
        [id_curso],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  },

  listarAlumnos(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT Usuario.nombre, Usuario.email FROM Usuario INNER JOIN Paga ON Usuario.doc_identidad = Paga.doc_identidad INNER JOIN Curso ON Paga.id_curso = Curso.id_curso WHERE Curso.id_curso = ?',
        [id_curso],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  },

  listarMaterial(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT DISTINCT titulo, descripcion, archivo FROM Material INNER JOIN Visualizar ON Material.id_mat = Visualizar.id_mat INNER JOIN Gestiona ON Material.id_mat = Gestiona.id_mat INNER JOIN Usuario ON Visualizar.id_nodo = Usuario.id_nodo INNER JOIN Profesor ON Gestiona.doc_id = Profesor.doc_id INNER JOIN Paga ON Usuario.doc_identidad = Paga.doc_identidad INNER JOIN Dicta ON Profesor.doc_id = Dicta.doc_id INNER JOIN Curso ON Dicta.id_curso = Curso.id_curso WHERE Curso.id_curso = ?',
        [id_curso],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  },

  listarTarea(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT DISTINCT Tarea.nombre, Tarea.descripcion, Tarea.fecha_e, Tarea.archivo FROM Tarea INNER JOIN Encarga ON Tarea.id_tarea = Encarga.id_tarea INNER JOIN Profesor ON Encarga.doc_id = Profesor.doc_id INNER JOIN Dicta ON Profesor.doc_id = Dicta.doc_id INNER JOIN Curso ON Dicta.id_curso = Curso.id_curso WHERE Curso.id_curso = ?',
        [id_curso],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  },

  listarForo(id_curso) {
    return new Promise((resolve, reject) => {
      conexion.query('SELECT DISTINCT Foro.nombre, Foro.descripcion FROM Foro INNER JOIN Tiene ON Foro.id_foro = Tiene.id_foro INNER JOIN Curso ON Tiene.id_curso = Curso.id_curso WHERE Curso.id_curso = ?',
        [id_curso],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
};
