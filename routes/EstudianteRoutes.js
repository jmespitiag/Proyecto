const express = require('express');
const router = express.Router();


const EstudianteModel = require('../models/Estudiante');


router.get('/', function (req, res, next) {
    EstudianteModel
        .obtener()
        .then(Estudiante => {
            res.render("Estudiante/ver", {
                Estudiante: Estudiante,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo Estudiante");
        });

});
router.get('/agregar', function (req, res, next) {
    res.render("Estudiante/agregar");
});
router.post('/insertar', function (req, res, next) {
    const { id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña } = req.body;
    if (!id_nodo || !ref_bancaria || !email || !genero || !nombre || !doc_identidad || !contraseña) {
        return res.status(500).send("Falta una parte del registro");
    }
   
    EstudianteModel
        .insertar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña)
        .then(id_nodo => {
            res.redirect("/Estudiante");
        })
        .catch(err => {
            return res.status(500).send("Error insertando Estudiante");
        });
});
router.get('/eliminar/:id_nodo', function (req, res, next) {
    EstudianteModel
        .eliminar(req.params.id_nodo)
        .then(() => {
            res.redirect("/Estudiante");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});
router.get('/editar/:id_nodo', function (req, res, next) {
    EstudianteModel
        .obtenerPorId(req.params.id_nodo)
        .then(Estudiante => {
            if (Estudiante) {
                res.render("Estudiante/editar", {
                    Estudiante: Estudiante,
                });
            } else {
                return res.status(500).send("No existe Estudiante con ese id");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo Estudiante");
        });
});
router.post('/actualizar/', function (req, res, next) {
    const { id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña} = req.body;
    if ( !id_nodo ||  !ref_bancaria || !email || !genero || !nombre || !doc_identidad || !contraseña) {
        return res.status(500).send("No hay suficientes datos");
    }
    // Si todo va bien, seguimos
    EstudianteModel
        .actualizar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad,contraseña)
        .then(() => {
            res.redirect("/Estudiante");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando Estudiante");
        });
});

module.exports = router;