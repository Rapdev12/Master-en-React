import { useState, useEffect } from 'react';

function UseEffect() {

    const [numero, setNumero] = useState(0);

    // Se ejecuta de forma asíncrona DESPUÉS de que el navegador ya pintó la pantalla
    useEffect(() => {
        console.log('👉 [useEffect] Se ejecutó DESPUÉS del paint');
    }, [numero]);

    console.log('🎨 Renderizando componente UseEffect...');

    return (
        <div style={{ padding: '20px', border: '2px solid #E34F26', marginBottom: '15px' }}>
            <h3>Componente: useEffect</h3>
            <p>Número: {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
        </div>
    );
}

export default UseEffect