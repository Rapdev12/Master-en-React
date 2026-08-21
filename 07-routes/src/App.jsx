import './App.css'
import Routers from './router/Routers';
import { BrowserRouter } from 'react-router'

function App() {
  

  return (
    <div>
            
      {/* Aca van las rutas nuevas */}

      <BrowserRouter>
      <Routers />
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
