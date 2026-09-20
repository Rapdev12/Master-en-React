import MainLayout from './layout/MainLayout';
import type { User } from './types'; // 👈 Importamos el tipo real
import './App.css';

function App() {
  // Ahora sí cumple exactamente con la interfaz User de la sesión anterior:
  const fakeUser: User = {
    _id: 'user-123',
    name: 'Ronald Palacios',
    nick: 'ronaldp',
    email: 'ronald@bubbleweb.com',
  };

  return (
    <MainLayout user={fakeUser}>
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h2 style={{ color: '#1e293b', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          ¡Bienvenido a BubbleWeb! 🫧
        </h2>
        <p style={{ color: '#64748b' }}>
          Tu Header, Nav con submenú, MainLayout y Footer están listos y conectados.
        </p>
      </div>
    </MainLayout>
  );
}

export default App;