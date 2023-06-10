const express = require('express');
const router = express.Router();


const UsuarioModel = require('../models/Usuario');
const Usuario = require('../models/Usuario');


router.get('/', function (req, res, next) {
    UsuarioModel
        .obtener()
        .then(Usuario => {
            res.render("Usuario/ver", {
                Usuario: Usuario,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo Usuario");
        });

});
router.get('/agregar', function (req, res, next) {
    res.render("Usuario/agregar");
});
router.post('/insertar', function (req, res, next) {
    const { id_nodo,ref_bancaria, email,genero,nombre,doc_identidad} = req.body;
    if (!id_nodo || !ref_bancaria || !email || !genero || !nombre || !doc_identidad) {
        return res.status(500).send("Falta una parte del registro");
    }
   
    UsuarioModel
        .insertar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad)
        .then(doc_identidad => {
            res.redirect("/Usuario");
        })
        .catch(err => {
            return res.status(500).send("Error insertando Usuario");
        });
});
router.get('/eliminar/:doc_identidad', function (req, res, next) {
    UsuarioModel
        .eliminar(req.params.doc_identidad)
        .then(() => {
            res.redirect("/Usuario");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});
router.get('/editar/:doc_identidad', function (req, res, next) {
    UsuarioModel
        .obtenerPorId(req.params.doc_identidad)
        .then(Usuario => {
            if (Usuario) {
                res.render("Usuario/editar", {
                    Usuario: Usuario,
                });
            } else {
                return res.status(500).send("No existe Usuario con ese id");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo Usuario");
        });
});
router.post('/actualizar/', function (req, res, next) {
    const { id_nodo,ref_bancaria, email,genero,nombre,doc_identidad} = req.body;
    if ( !id_nodo ||  !ref_bancaria || !email || !genero || !nombre || !doc_identidad  ) {
        return res.status(500).send("No hay suficientes datos");
    }
   
    UsuarioModel
        .actualizar(id_nodo,ref_bancaria, email,genero,nombre,doc_identidad)
        .then(() => {
            res.redirect("/Usuario");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando Usuario");
        });
});

module.exports = router;