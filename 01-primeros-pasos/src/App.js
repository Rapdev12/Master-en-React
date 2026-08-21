import logo from './logo.svg';
import './App.css';
import Micomponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponentes from './EventosComponentes'



function App() {

  let ficha = {
    nombre:"Ronald",
    apellido:"Palacios",
    edad: 44
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react.
        </p>
        < TercerComponente 
        datos = {ficha}/>
        < SegundoComponente />
      </header>

      {/*Cargar mi primer componente */}

      < Micomponente />
      <EventosComponentes />
     </div>
  );
}

export default App;
