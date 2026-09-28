import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import styles from './Login.module.css';

export const Login: React.FC = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e: React.SyntheticEvent) => {
  e.preventDefault();

  if (!nick.trim() || !password.trim()) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  setLoading(true);

  const response = await loginUser(nick, password);
  setLoading(false);

  // Verificamos la propiedad "token" que nos confirma Bruno
  if (response && response.token) {
    localStorage.setItem('token', String(response.token));
    alert('¡Bienvenido!');
    navigate('/home');
  } else {
    alert((response?.message as string) || 'Error al iniciar sesión');
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>🫧 Bienvenid@ a BubbleWeb</h2>
          <p>Ingresa tus datos para acceder a tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nick">Usuario / Nick</label>
            <input
              type="text"
              id="nick"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              placeholder="Ej. alex_dev"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className={styles.link}>
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};