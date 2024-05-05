const mongoose = require("mongoose");

const horaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    especialidad: {
        type: String,
        default: "Imagenología"
    },
    fecha: String,
    hora: String,
    rut: String,
    tipo_examen: String,
    estado: String,
    motivo: String,
    derivado: String,
    Fonasa: String
},
    {
        collection: 'horarios',
        timestamps: true
    }
);

module.exports = mongoose.model('Hora', horaSchema);