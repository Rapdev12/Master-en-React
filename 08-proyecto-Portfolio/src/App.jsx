
import { BrowserRouter } from 'react-router';
import './App.css'
import MyRoutes from './router/MyRoutes';

function App() {


  return (
    <div className="layaout">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>

    </div>
  )
}

export default App
