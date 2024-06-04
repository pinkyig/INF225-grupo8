import React, { Component } from 'react'
import axios from 'axios';


export default class CreateHora extends Component {
    state = {
        fecha: "",
        hora: "",
        rut: "",
        tipo_examen: "",
        motivo: "",
        derivado: "",
        Fonasa: ""
    };
    
    handleSearch = async () => {

        try {
            const { fecha, hora, rut, tipo_examen, motivo, derivado, Fonasa } = this.state;
            if (!fecha || !hora || !rut || !tipo_examen || !motivo || !derivado ||!Fonasa) {
                alert('Todos los campos son obligatorios');
                return; 
            }

            if (hora >"16:00"|| hora<"08:00"){
                alert('Hora no permitida');
                return;
            }

            const ficha = { fecha, hora, rut, tipo_examen, motivo, derivado, Fonasa };
            const res = await axios.post('http://localhost:5000/api/horas', ficha);
            console.log(res.data.message);
            window.location.href = 'http://localhost:3000'
        } catch (error) {
            console.error('Error al crear la hora:', error);
        }
    };

    render() {
        return (
            <div style={{ width: '400px', margin: 'auto', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
                <h2 style={{ textAlign: 'center' }}>Agendamiento de horas</h2>
                <div className="mb-3">
                    <input
                        type="date"
                        className='form-control'
                        value={this.state.fecha}
                        onChange={(e) => this.setState({ fecha: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="time"
                        className='form-control'
                        placeholder="Ingresa la hora"
                        value={this.state.hora}
                        onChange={(e) => this.setState({ hora: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Ingresa el Rut"
                        value={this.state.rut}
                        onChange={(e) => this.setState({ rut: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <select
                        className='form-control'
                        value={this.state.tipo_examen}
                        onChange={(e) => this.setState({ tipo_examen: e.target.value })}
                    >
                        <option value="" disabled>Selecciona el examen</option>
                        <option value="Ecografías">Ecografías</option>
                        <option value="Resonancia">Resonancia</option>
                        <option value="Escaner">Escaner</option>
                        <option value="Radiografías">Radiografías</option>
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Motivo"
                        value={this.state.motivo}
                        onChange={(e) => this.setState({ motivo: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Médico derivado"
                        value={this.state.derivado}
                        onChange={(e) => this.setState({ derivado: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <select
                        className='form-control'
                        value={this.state.Fonasa}
                        onChange={(e) => this.setState({ Fonasa: e.target.value })}
                    >
                        <option value="" disabled>Fonasa</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <button type="submit" onClick={this.handleSearch} className="btn btn-primary">Crear</button>
            </div>
        );
    }
}
