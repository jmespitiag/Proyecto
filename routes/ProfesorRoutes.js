const express = require('express');
const router = express.Router();

const productoModel = require("../models/Profesor");
const ProfesorModel = require('../models/Profesor');

router.get('/', function (req, res, next) {
    ProfesorModel
        .obtener()
        .then(Profesor => {
            res.render("Profesor/ver", {
                Profesor: Profesor,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo Profesor");
        });

});
router.get('/agregar', function (req, res, next) {
    res.render("Profesor/agregar");
});
router.post('/insertar', function (req, res, next) {
    const { nombre,email, telefono, area_p, area_a, contraseña } = req.body;
    if (!nombre || !email || !telefono || !area_p || !area_a || !contraseña) {
        return res.status(500).send("Falta una parte del registro");
    }
    // Si todo va bien, seguimos
    productoModel
        .insertar(nombre,email, telefono, area_p, area_a, contraseña)
        .then(doc_id => {
            res.redirect("/Profesor");
        })
        .catch(err => {
            return res.status(500).send("Error insertando Profesor");
        });
});
router.get('/eliminar/:doc_id', function (req, res, next) {
    productoModel
        .eliminar(req.params.doc_id)
        .then(() => {
            res.redirect("/Profesor");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});
router.get('/editar/:doc_id', function (req, res, next) {
    productoModel
        .obtenerPorId(req.params.doc_id)
        .then(Profesor => {
            if (Profesor) {
                res.render("Profesor/editar", {
                    Profesor: Profesor,
                });
            } else {
                return res.status(500).send("No existe Profesor con ese id");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo Profesor");
        });
});
router.post('/actualizar/', function (req, res, next) {
    const { doc_id,nombre,email, telefono, area_p, area_a, contraseña} = req.body;
    if (!nombre || !email|| !doc_id || !telefono || !area_p || !area_a || !contraseña) {
        return res.status(500).send("No hay suficientes datos");
    }
    // Si todo va bien, seguimos
    productoModel
        .actualizar(doc_id, nombre,email, telefono, area_p, area_a, contraseña)
        .then(() => {
            res.redirect("/Profesor");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando Profesor");
        });
});

module.exports = router;