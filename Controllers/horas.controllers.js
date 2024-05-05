const horaCtrl = {};
const { Types: { ObjectId } } = require('mongoose');
const Hora = require("../Models/Hora");

horaCtrl.getHoras = async (req, res) => {
    const horas = await Hora.find().sort({ hora: 'desc' });
    res.json(horas);
}

horaCtrl.getHoraByRut = async (req, res) => {
    const horas = await Hora.find({ rut: req.params['rut'] });
    res.json(horas);
}

horaCtrl.borrar = async (req, res) => {
    const horas = await Hora.deleteOne({ _id: req.params.id });
    res.json(horas);
}

horaCtrl.crear = async (req , res) => {
    const { fecha , hora , rut , tipo_examen,
        estado , motivo , derivado , Fonasa } =req.body;
    const newHora = new Hora({
        _id: new ObjectId(),
        fecha: fecha,
        hora: hora,
        rut: rut,
        tipo_examen: tipo_examen,
        estado: "Pendiente",
        motivo: motivo,
        derivado: derivado,
        Fonasa: Fonasa
    })
    await newHora.save({ message: "Hora creada" })
    res.json()
}

module.exports = horaCtrl;