const fichaCtrl = {};
const Ficha = require("../Models/Ficha");

fichaCtrl.getFichas = async (req, res) => {
    const ficha = await Ficha.find();
    res.json(ficha);
    console.log(ficha)
}

fichaCtrl.getFichaByRut = async (req, res) => {
    const ficha = await Ficha.findOne({ rut: req.params['rut'] });
    res.json(ficha);
}

fichaCtrl.createFicha = async (req, res) => {
    const { nombre, apellido, rut, edad, alergias,
        operaciones, diagnosticos_ant } = req.body;
    const newFicha = new Ficha({
        nombre: nombre,
        apellido: apellido,
        rut: rut,
        edad: edad,
        alergias: alergias,
        operaciones: operaciones,
        diagnosticos_ant: diagnosticos_ant
    });
    await newFicha.save()
    res.json({ message: "Ficha creada" });
};

module.exports = fichaCtrl;