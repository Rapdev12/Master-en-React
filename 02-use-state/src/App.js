import logo from './logo.svg';
import './App.css';
import MiPrimerEstado from './components/MiPrimerEstado';
import EjercicioComponet from './components/EjercicioComponet';

function App() {
  let date = new Date();
  let fullyear = date.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>El estado en React - Hook useState</h2>


        < MiPrimerEstado />

        <EjercicioComponet year={fullyear} />
      </header>
    </div>
  );
}

export default App;
