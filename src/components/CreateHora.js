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
            if (!fecha || !hora || !rut || !tipo_examen || !motivo || !Fonasa) {
                alert('Todos los campos son obligatorios');
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
            <div>Agendamiento de horas
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Ingresa la Fecha"
                    value={this.state.fecha}
                    onChange={(e)=> this.setState({fecha: e.target.value })}
                />
                </div>
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Ingresa la hora"
                    value={this.state.hora}
                    onChange={(e)=> this.setState({hora: e.target.value })}
                />
                </div>
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Ingresa el Rut "
                    value={this.state.rut}
                    onChange={(e)=> this.setState({rut: e.target.value })}
                />
                </div>
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Ingresa el examen "
                    value={this.state.tipo_examen}
                    onChange={(e)=> this.setState({tipo_examen: e.target.value })}
                />
                </div>
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Motivo "
                    value={this.state.motivo}
                    onChange={(e)=> this.setState({motivo: e.target.value })}
                />
                </div>
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Medico derivado (opcional)"
                    value={this.state.derivado}
                    onChange={(e)=> this.setState({derivado: e.target.value })}
                />
                </div>
                <div>
                <input
                    type="text"
                    className='col-2'
                    placeholder="Tiene Fonasa "
                    value={this.state.Fonasa}
                    onChange={(e)=> this.setState({Fonasa: e.target.value })}
                />
                </div>
                <button type="submit" onClick={this.handleSearch}>Crear</button>
            </div>
        )
    }
}
