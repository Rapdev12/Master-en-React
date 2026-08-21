import { useContext, useState } from "react";
import { PruebaContext } from "../context/PruebaContext";
import { useNavigate } from "react-router"; // Importalo

function Login() {
  const navigate = useNavigate(); // Lo inicializas
  // 1. Nos traemos la función para actualizar el estado global
  const { setDatosCurso } = useContext(PruebaContext);

  // 2. Estado local para el formulario
  const [nombre, setNombre] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    // 3. Al hacer clic, actualizamos el estado GLOBAL que vive en el Provider
    setDatosCurso(prev => ({
      ...prev,
      estudiante: "Sesión iniciada por: " + nombre
    }));

    alert("¡Hola " + nombre + ", datos actualizados!");

    navigate("/home");
  };

  return (
    <form onSubmit={enviarFormulario}>
      <input
        type="text"
        placeholder="Introduce tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  )
}

export default Login