import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

export const Login: React.FC = () => {
  // 2. ESTADOS LOCALES (Controlled Components)
  // Guardan en tiempo real el valor ingresado en cada campo del formulario.
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Hook de React Router DOM para redirigir al usuario tras una acción.
  const navigate = useNavigate();

  // 3. MANEJADOR DEL ENVÍO (Submit Event)  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Validación básica: asegura que los campos no contengan solo espacios en blanco.
    if (!email.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // [SIMULACIÓN FRONTEND]: Aquí irá la petición 'fetch' a la API REST cuando conectemos el backend.
    console.log('Iniciando sesión con:', { email, password });

    // Redirige automáticamente a la pantalla principal del feed.
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        
        {/* Encabezado visual del formulario */}
        <div className={styles.header}>
          <h2>🫧 Bienvenid@ a BubbleWeb</h2>
          <p>Ingresa tus datos para acceder a tu cuenta</p>
        </div>

        {/* Formulario controlado */}
        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* Campo: Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email} // Enlace bidireccional (El estado dicta el valor del input)
              onChange={(e) => setEmail(e.target.value)} // Evento que actualiza el estado
              placeholder="tu.usuario@ejemplo.com"
              required
            />
          </div>

          {/* Campo: Contraseña */}
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

          {/* Botón de envío que dispara el evento 'onSubmit' del formulario */}
          <button type="submit" className={styles.submitBtn}>
            Iniciar Sesión
          </button>
        </form>

        {/* Pie de página con enlace hacia la vista de Registro */}
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