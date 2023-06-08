const express = require('express');
const router = express.Router();

const CursoModel = require('../models/Cursos');

router.get('/', (req, res, next) => {
  CursoModel.listar()
    .then((Curso) => {
      res.render('Cursos/ver', {
        Curso: Curso
        
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error obteniendo Grupo');
    });
});

router.get('/:id_curso', async (req, res, next) => {
  try {
    let id_curso = req.params.id_curso;
    const Nombre = CursoModel.listarNombre(id_curso)
    const profesores = await CursoModel.listarProfesor(id_curso);
    console.log(profesores); // Agrega este console.log para verificar el contenido de profesores

    const alumnos = await CursoModel.listarAlumnos(id_curso);
    const materiales = await CursoModel.listarMaterial(id_curso);
    const tareas = await CursoModel.listarTarea(id_curso);
    const foros = await CursoModel.listarForo(id_curso);

    const data = {
      profesores,
      alumnos,
      materiales,
      tareas,
      foros
    };

    res.render('Cursos/curso', { Curso: data, id_curso: req.params.id_curso,Nombre: Nombre });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos');
  }
});

module.exports = router;
