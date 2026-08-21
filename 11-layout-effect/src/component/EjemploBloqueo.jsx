import { useRef } from 'react'

export const EjemploBloqueo = () => {

  const cajaRef = useRef();
  
  const moverCaja = () => {
    // Modificamos el DOM directamente de forma síncrona y limpia
    if (cajaRef.current) {
      cajaRef.current.style.transform = 'translateX(400px)';
      cajaRef.current.style.transition = 'transform 0.5s ease';
    }
  };

  const reiniciarCaja = () => {
    if (cajaRef.current) {
      cajaRef.current.style.transform = 'translateX(10px)';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Prueba de Movimiento Limpia</h3>
      <button onClick={moverCaja} style={{ marginRight: '10px' }}>Mover a 400px</button>
      <button onClick={reiniciarCaja}>Reiniciar</button>

      <div
        ref={cajaRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#ff5722',
          transform: 'translateX(10px)',
          marginTop: '20px'
        }}
      />
    </div>
  );
};