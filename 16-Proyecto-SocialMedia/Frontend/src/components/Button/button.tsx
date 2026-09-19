import type React from "react";
import styles from "./Button.module.css";


// 1. Contrato de Props: definimos exactamente qué acepta nuestro botón
interface ButtonProps {
    children: React.ReactNode;

    // Acción opcional que se dispara al hacer clic
    onClick?: ()=> void;

    // Union Type: solo permitimos estas 3 variantes visuales
    variant?: "primary" | "secundary" | "outline";

    // Tipo de botón HTML estándar (útil para formularios donde usamos type="submit")
    type?: "button" | "submit" | "reset";

    // Para deshabilitarlo si la aplicación está procesando algo
    disabled: boolean;

};

// 2. Componente Funcional de React tipado
export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = "primary", // Si no le especifican variante, por defecto será 'primary'
    type = "button",  // Si no le especifican tipo, por defecto será un botón normal
    disabled = false,
}) => {
    // Combinamos la clase base (.btn) con la clase de la variante dinámica (.primary, .secondary, etc.)
  const buttonClassName = `${styles.btn} ${styles[variant]}`;
  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

