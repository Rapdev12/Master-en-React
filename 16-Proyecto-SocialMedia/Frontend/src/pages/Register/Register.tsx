import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';
import styles from './Register.module.css';

export const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
  e.preventDefault();

  if (!name.trim() || !nick.trim() || !password.trim() || !confirmPassword.trim()) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden. Por favor, verifícalas.');
    return;
  }

  setLoading(true);

  const response = await registerUser({ name, nick, password });
  setLoading(false);

  // Verificamos si creó el usuario comprobando que devuelva su _id o nick
  if (response && (response._id || response.nick)) {
    alert('¡Cuenta creada con éxito! Ahora puedes iniciar sesión.');
    navigate('/login');
  } else {
    alert((response?.message as string) || 'Error al registrar el usuario');
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>🫧 Crear Cuenta en BubbleWeb</h2>
          <p>Únete a nuestra comunidad y empieza a compartir</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nombre real</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Alexander Ruiz"
              required
            />
          </div>

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

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Registrarse'}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className={styles.link}>
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};