import React, { Component } from 'react';
import axios from 'axios';
import LlamarPaciente from './LlamarPaciente';
import ShowFicha from './ShowFicha';
import BorrarHora from './BorrarHora';

export default class DisplayHoras extends Component {
    state = {
        horas: [],
    };

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/horas');
        const horasOrdenadas = res.data.sort((a, b) => {
        return a.hora.localeCompare(b.hora);});
        this.setState({ horas: horasOrdenadas });
        // Verificar si los datos se han almacenado correctamente
        console.log('Estado actualizado:', this.state.horas);
    }

    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <table className='table table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <th scope='col' className='col-1'>Hora</th>
                                <th scope='col' className='col-1'>Rut</th>
                                <th scope='col' className='col-2'>Tipo de Examen</th>
                                <th scope='col' className='col-3'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.horas.map((hora) => (
                                <tr key={hora.rut}>
                                    <td>{hora.hora}</td>
                                    <td>{hora.rut}</td>
                                    <td>{hora.tipo_examen}</td>
                                    <td className='d-flex justify-content-around'>
                                        <LlamarPaciente hora={hora.hora}/>
                                        <ShowFicha rut={hora.rut} />
                                        <BorrarHora id={hora._id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


}

