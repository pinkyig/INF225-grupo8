const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    rut: {
        type: String,
        unique: true
    },
    examen: String,
    hora: String
});

module.exports = mongoose.model('Paciente', pacienteSchema);
