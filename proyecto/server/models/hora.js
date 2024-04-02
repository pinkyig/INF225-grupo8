const mongoose = require("mongoose");

const horaSchema = new mongoose.Schema({
    especialidad: {
        type: String,
        default: "Imagenología"
    },
    fecha: String,
    hora: String,
    rut: String,
    tipo_examen: String
},
    {
        collection: 'horarios',
        timestamps: true
    }
);

module.exports = mongoose.model('Hora', horaSchema);
