
import { useMayus } from "../hook/useMayus"

function TestHook() {

       
    const {estado, minusculas, mayusculas} = useMayus("Mi site web")
    

    return (
        <div>

            <h1>Test Hook</h1>
            <h2>{estado}</h2>

            <button onClick={mayusculas}>Cambiar</button>
            <button onClick={minusculas}>Cambiar</button>

        </div>
    )
}

export default TestHook