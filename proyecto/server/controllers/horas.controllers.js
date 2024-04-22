const horaCtrl = {};
const Hora = require("../Models/Hora");

horaCtrl.getHoras = async (req, res) => {
    const horas = await Hora.find().sort({ hora: 'desc' });
    res.json(horas);
}

horaCtrl.getHoraByRut = async (req, res) => {
    const horas = await Hora.find({ rut: req.params['rut'] });
    res.json(horas);
}

module.exports = horaCtrl;
