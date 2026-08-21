import { useContext } from "react";
import { PruebaContext } from '../context/PruebaContext';


function Home() {

  const { datosCurso } = useContext(PruebaContext);

  return (
    <div>
      <h1>Página de Home</h1>
      <p>Curso: <strong>{datosCurso.nombreCurso}</strong></p>
      <p>Profesor: <strong>{datosCurso.profesor}</strong></p>
      <p>Clase: <strong>{datosCurso.modulo}</strong></p>
      <p>Estudiante es: <strong>{datosCurso.estudiante}</strong></p>
    </div>
  );
}

export default Home