import './App.css';
import react, {useState} from 'react';


function App() {
  
  const [updated, setupdated]= useState()
  const [text, setText] = useState()
  const textOnChange = (event) =>{
    setText(event.target.value)
  }
  const buttonOnClick = (event) =>{
    setupdated("se pide que el paciente "+text+" que pase a la sala junto al doctor")
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{updated}</p>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Rut</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Examen</th>
              <th>hora de atencion</th>
              <th>informacion</th>
              <th>llamar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>21131567-9</th>
              <th>Cristobal</th>
              <th>Guerrero</th>
              <th>scanner</th>
              <th>9:30</th>
              <th><button>informacion</button></th>
              <th><button>llamar</button></th>
            </tr>
              <th>12567889-1</th>
              <th>Eduardo</th>
              <th>Garrido</th>
              <th>radiografia</th>
              <th>11:30</th>
              <th><button>informacion</button></th>
              <th><button>llamar</button></th>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
