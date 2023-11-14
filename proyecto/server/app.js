const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const db = require("./Database");

async function ObtenerInformacionTabla(cliente){

	const resultado = await cliente.db("BD-hospital").collection("horarios").find({

		especialidad:"Imagenologia"
		
	})

	const arreglo = await resultado.toArray();

	const estructura = arreglo.map(arreglo => ({

		Rut: arreglo.especialidad,
		Examen: arreglo.tipo_examen,
		Hora: arreglo.hora

	}));

	estructura.forEach(item => {

		console.log(item.Rut);
		console.log(item.Examen);
		console.log(item.Hora);
	})
}


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