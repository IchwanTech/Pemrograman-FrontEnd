import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          marginLeft: "100px",
        }}
      >
        {count}
      </h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={() => setCount(count - 1)}
        >
          Kurang
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={() => setCount(count + 1)}
        >
          Tambah
        </button>
      </div>
    </div>
  );
};

export default Counter;
