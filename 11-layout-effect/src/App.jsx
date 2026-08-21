import './App.css'
import { EjemploBloqueo } from './component/EjemploBloqueo';
import UseEffect from './component/UseEffect';
import UseLayoutEffect from './component/UseLayoutEffect';

function App() {
  
  return (
    <div style={{ padding: '30px'}}>

    <h1>Comparación de Hooks</h1>
     <UseLayoutEffect/>

     <UseEffect/>


     <EjemploBloqueo/>
    </div>
  )
}

export default App
