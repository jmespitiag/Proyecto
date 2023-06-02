const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Bases de Datos' });
});

module.exports = router;