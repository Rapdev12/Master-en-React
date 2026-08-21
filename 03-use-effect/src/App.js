import logo from './logo.svg';
import './App.css';
import PruebasComponents from './components/PruebasComponents';
import AjaxComponet from './components/AjaxComponet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        < PruebasComponents />

        < AjaxComponet />
      </header>
    </div>
  );
}

export default App;
