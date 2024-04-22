import React, { Component } from 'react'
import axios from 'axios';


export default class VerPerfil extends Component {
    state = {
        horas: [],
        busqueda: ''
    };
  
    handleSubmit = async (event) => {
        event.preventDefault();
        const { rut } = this.state;

        try {
            const res = await axios.get(`http://localhost:5000/api/horas/${rut}`);
            const horasOrdenadas = res.data.sort((a, b) => a.hora.localeCompare(b.hora));
            this.setState({ horas: horasOrdenadas});
        } catch (error) {
            console.error('Error al cargar datos:', error);
        }
    };

    handleChange = (event) => {
        this.setState({ rut: event.target.value });
    };

    render() {
        const { rut} = this.state;
        return (
            <div>Ver Perfil
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                placeholder="Ingresa un RUT"
                                value={rut}
                                onChange={this.handleChange}
                            />
                            <button type="submit">Buscar</button>
                        </form>
                        {this.state.horas.length > 0 &&(
                            <table className='table table-bordered'>
                            <thead className='table-dark'>
                                <tr>
                                    <th scope='col' className='col-1'>Hora</th>
                                    <th scope='col' className='col-2'>fecha</th>
                                    <th scope='col' className='col-1'>Rut</th>
                                    <th scope='col' className='col-2'>Tipo de Examen</th>
                                    <th scope='col' className='col-1'>Estado</th>
                                    <th scope='col' className='col-1'>Motivo</th>
                                    <th scope='col' className='col-1'>medico derivado</th>
                                    <th scope='col' className='col-1'>Fonasa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.horas.map((hora) => (
                                    <tr key={hora.rut}>
                                        <td>{hora.hora}</td>
                                        <td>{hora.fecha}</td>
                                        <td>{hora.rut}</td>
                                        <td>{hora.tipo_examen}</td>
                                        <td>{hora.estado}</td>
                                        <td>{hora.motivo}</td>
                                        <td>{hora.derivado || 'No tiene'}</td>
                                        <td>{hora.Fonasa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        )}
                    </div>
                </div>
            </div>
            
        );
    }
}
