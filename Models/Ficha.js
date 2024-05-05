const mongoose = require("mongoose");

const fichaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    rut: {
        type: String,
        unique: true
    }, 
    edad: Number,
    alergias: String,
    operaciones: String,
    diagnosticos_ant: [String]},
    {collection: 'fichas'});

module.exports = mongoose.model('Ficha', fichaSchema);