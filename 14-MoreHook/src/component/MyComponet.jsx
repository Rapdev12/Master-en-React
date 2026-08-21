import { useId } from "react";

function MyComponet() {

    const idEmail = useId();

  return (
    <div>{/* 2. Conectamos el htmlFor con el id del input */}
      <label htmlFor={idEmail}>Correo electrónico: </label>
      
      <input 
        id={idEmail} 
        type="email" 
        placeholder="ejemplo@correo.com" 
      />
      </div>
  )
}

export default MyComponet