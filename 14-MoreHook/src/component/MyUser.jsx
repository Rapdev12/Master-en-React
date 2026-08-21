import { useState } from "react";
import { useAjax } from "../hook/useAjax";


function MyUser() {

    const [id, setId] = useState(1); // Arrancamos con el usuario 1

    const { state, setUrl } = useAjax(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    const siguienteUsuario = () => {
        const nuevoId = id + 1;
        setId(nuevoId);
        setUrl(`https://jsonplaceholder.typicode.com/users/${nuevoId}`);
    };

    return (
        <div>


            <h1>My user</h1>
            <p>Data Users:</p>
            {state.loading && <p>🔄 Cargando nuevo usuario...</p>}

            {state.data && !state.loading && (
                <div>
                    <p><strong>Nombre:</strong> {state.data.name}</p>
                    <p><strong>Email:</strong> {state.data.email}</p>
                </div>
            )}
                < button onClick={siguienteUsuario}>Next</button>




        </div>
    )
}

export default MyUser