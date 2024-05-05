const { Router } = require("express");
const router = Router();

const { getHoraByRut , getHoras, borrar , crear} = require("../Controllers/horas.controllers");

router.route('/')
    .get(getHoras)
    .post(crear);

router.route('/:rut')
    .get(getHoraByRut)

router.route('/:id')
    .delete(borrar)

module.exports = router;