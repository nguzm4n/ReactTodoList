import './App.css';
import ListaDeTareas from './componentes/listaDeTareas.jsx'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'


function App() {
  return (
    <div className="aplicacion-tareas">
      {/* creamos el logo de freecodecamp Un reto podria hacer
      del logo un componente*/}
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        />
      </div>
      {/* Contenedor Lista de Tareas */}
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
