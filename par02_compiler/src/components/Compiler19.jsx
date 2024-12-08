import { useState } from "react";

const Compiler19 = () => {
  const [count, setCount] = useState(0);

  // Tidak perlu lagi menggunakan useMemo
  const expensiveCalculation = count * 2;

  return (
    <div>
      <p>Hasil React 19: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};

export default Compiler19;
