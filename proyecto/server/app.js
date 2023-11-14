const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const db = require("./Database");

const ObtenerDatos = async () => {
    try {
        const resultado = await fichas.find({
            especialidad:"Imagenologia"
        });

      
        const estructura = resultado.map(item => ({
            Rut: item.especialidad,
            Examen: item.tipo_examen,
            Hora: item.hora
        }));

        estructura.forEach(item => {
            console.log(item.Rut);
            console.log(item.Examen);
            console.log(item.Hora);

        });
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
};

ObtenerDatos()


const app = express();

app.set("port", process.env.PORT || 500);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

db()

app.listen(app.get("port") , ()=>{
    console.log('Servidor esta corriendo en el puerto: ${app.get("port")}');
});


module.exports = app;
