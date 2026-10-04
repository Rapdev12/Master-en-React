import "./App.css"
import Routings from './routes/Rountings';
import { AuthProvider } from './context/AuthProvider';


function App() {
  

  return (
    <AuthProvider>
      
      <Routings />

    </AuthProvider>
  )
}

export default App