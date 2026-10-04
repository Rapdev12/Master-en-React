import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import { Petitions } from '../../helpers/Petitions';
import { Global } from '../../helpers/Global';
import type { User } from '../../types';

// Tipamos la respuesta del backend UNA vez, fuera del componente
interface LoginResponse {
  status?: string;
  message?: string;
  token?: string;
  user?: User;
}

export const Login = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!nick.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const { information } = await Petitions<LoginResponse>(
      `${Global.url}user/login`,
      'POST',
      { nick, password }
    );

    console.log('RESPUESTA LOGIN:', information);   // 👈 déjalo para ver qué llega

    if (information?.token) {
      login(information.token, information.user ?? { nick: nick.trim().toLowerCase() });
      navigate('/home', { replace: true });
    } else {
      // ⚠️ AQUÍ va el else y NADA más. Sin alert duplicado detrás.
      alert(information?.message ?? 'Usuario o contraseña incorrectos');
    }
  }; //👈 Se agregó el cierre de handleSubmit

return (
  <div className="login-container">
    <h2>Iniciar Sesión</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario / Nick"
        value={nick}
        onChange={(e) => setNick(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  </div>
);
};

export default Login;