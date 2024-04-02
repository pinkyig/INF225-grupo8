const { Router } = require("express");
const router = Router();

const { getHoras } = require("../Controllers/horas.controllers");

router.route('/')
    .get(getHoras)

module.exports = router;
