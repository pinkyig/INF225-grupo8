import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const ShowFicha = ({ rut }) => {
    const [fichaData, setFichaData] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/ficha/${rut}`);
                setFichaData(res.data);
            } catch (error) {
                console.error('Error al obtener la ficha:', error);
            }
        };

        fetchData();
    }, [rut]);

    return (
        <>
            <button
                type='button'
                className='btn btn-secondary btn-sm'
                onClick={handleShow}
            >
                Ver ficha
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ficha del paciente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {fichaData ? (
                        <div>
                            <p>Nombre: {fichaData.nombre}</p>
                            <p>Apellido: {fichaData.apellido}</p>
                            <p>Edad: {fichaData.edad}</p>
                            <p>Rut: {fichaData.rut}</p>
                            <p>Alergias: {fichaData.alergias || 'No presenta'}</p>
                            <p>Operaciones: {fichaData.operaciones || 'No presenta'}</p>
                            <p>Diagnósticos anteriores : {<ul>
                                {fichaData.diagnosticos_ant.map(item => <li>{item}</li>)}
                            </ul> || 'No presenta'}</p>
                        </div>
                    ) : (
                        <p>Cargando datos...</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ShowFicha;
