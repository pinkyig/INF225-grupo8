const { Router } = require("express");
const router = Router();

const { getHoraByRut , getHoras } = require("../Controllers/horas.controllers");

router.route('/')
    .get(getHoras);

router.route('/:rut')
    .get(getHoraByRut)

module.exports = router;
