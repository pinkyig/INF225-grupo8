import axios from 'axios';

const BorrarHora = ({ id }) =>{
    const borrar = async () =>{
        await axios.delete(`http://localhost:5000/api/horas/${id}`);
        window.location.reload();
    }

    return(
        <>
            <button 
                type='button'
                className='btn btn-secondary btn-sm'
                onClick={borrar}
            >
                borrar
            </button>
        </>
    );
};

export default BorrarHora;