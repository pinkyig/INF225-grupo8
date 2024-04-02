import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const LlamarPaciente = ({ hora }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <button
                type='button'
                className='btn btn-primary btn-sm'
                onClick={handleShow}>
                Llamar paciente
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Paciente en camino</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>El paciente fue llamado desde recepción.</p>
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

export default LlamarPaciente;
