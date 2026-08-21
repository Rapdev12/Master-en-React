
import React, { useState, useCallback } from "react";

// 1. Child component memoized with React.memo
const IncrementorButton = React.memo(({ onIncrement }) => {
  console.log("🔴 Se renderizó el botón IncrementorButton");
  return <button onClick={onIncrement}>Sumar 1</button>;
});

// 2. Parent Component
function CounterApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //UseCallBack
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); 
  return (
    <div style={{ padding: "20px" }}>
      <h2>Contador: {count}</h2>

      {/* Input to test re-renders */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí algo acá..."
      />

      <br /><br />

      {/* We pass the memorized function to the memorized child. */}
      <IncrementorButton onIncrement={handleIncrement} />
    </div>
  );
}

export default CounterApp;