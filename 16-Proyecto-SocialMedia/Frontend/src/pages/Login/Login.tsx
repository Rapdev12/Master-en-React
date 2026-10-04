import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import styles from './Login.module.css';
import type { User } from '../../types';
import { useAuth } from '../../context/useAuth';



export const Login = () => {
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!nick.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);                              // 👈 botón en "Cargando..."
    try {
      const data = await loginUser(nick.trim(), password);
      console.log('RESPUESTA LOGIN:', data);

      if (!data?.token) {
        alert(data?.message ?? 'Usuario o contraseña incorrectos');
        return;
      }

      const user: User = data.user ?? { nick: nick.trim().toLowerCase() };
      login(data.token, user);
      navigate('/home', { replace: true });
    } catch (error) {
      console.error('Error en el login:', error);
      alert('No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);                           // 👈 siempre vuelve a habilitarse
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