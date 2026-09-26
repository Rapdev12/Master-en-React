import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export const Register: React.FC = () => {
  // 1. Estados locales para cada campo del formulario
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const navigate = useNavigate();

  // 2. Manejador del evento de envío usando React.SyntheticEvent
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifícalas.');
      return;
    }

    // [SIMULACIÓN FRONTEND]: Aquí se enviará la petición POST a la API REST de registro
    console.log('Usuario registrado con éxito:', { username, email, password });

    alert('¡Cuenta creada exitosamente! Redirigiendo al inicio de sesión...');
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2>🫧 Crear Cuenta en BubbleWeb</h2>
          <p>Únete a nuestra comunidad y empieza a compartir</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Nombre de usuario */}
          <div className={styles.inputGroup}>
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ej. alex_dev"
              required
            />
          </div>

          {/* Correo electrónico */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.usuario@ejemplo.com"
              required
            />
          </div>

          {/* Contraseña */}
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

          {/* Confirmar contraseña */}
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

          <button type="submit" className={styles.submitBtn}>
            Registrarse
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