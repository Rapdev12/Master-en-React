import { BrowserRouter } from 'react-router';
import './App.css'
import AppRouter from "./routing/AppRouter"
import {PruebaProvider} from './context/PruebaContext';

function App() {


  return (
    <>
      <PruebaProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PruebaProvider>
    </>
  )
}

export default App
