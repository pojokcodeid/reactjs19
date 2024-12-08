import { useMemo } from "react";
import { useState } from "react";

const Compiler18 = () => {
  const [count, setCount] = useState(0);

  // Menggunakan useMemo untuk optimasi
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Hasil React 18: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

export default Compiler18;
