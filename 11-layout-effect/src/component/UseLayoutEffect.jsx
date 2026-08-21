import { useState, useLayoutEffect } from 'react';

function UseLayoutEffect() {

    const [numero, setNumero] = useState(0);

    // Se ejecuta de forma síncrona ANTES de que el navegador pinte la pantalla
    useLayoutEffect(() => {
        console.log('👉 [useLayoutEffect] Se ejecutó ANTES del paint');
    }, [numero]);

    console.log('🎨 Renderizando componente UseLayoutEffect...');

    return (

        <div style={{ padding: '20px', border: '2px solid #007ACC', marginBottom: '15px' }}>
            <h3>Componente: useLayoutEffect</h3>
            <p>Número: {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
        </div>
    );      
    
}

export default UseLayoutEffect