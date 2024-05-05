const mongoose = require("mongoose");
const axios = require('axios');

const MONGO_URL = "mongodb+srv://cristobalguerrero:maximo02@bd-proyecto.ueutsjl.mongodb.net/?retryWrites=true&w=majority&appName=BD-proyecto"

const db = async() =>{
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("Conexion exitosa", conn.connection.host)
        console.log("se logro?")
    }
    catch (error) {
        console.log("no me conecte");
        console.log(error);
    }
}

module.exports = db;