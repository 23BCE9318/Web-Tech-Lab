// Counter.jsx
// Functional component that implements a counter using useState Hook

import { useState } from "react";

function Counter() {
  // useState Hook — stores the counter value
  // count     = current value (initially 0)
  // setCount  = function to update the value
  const [count, setCount] = useState(0);

  // Increment function — adds 1 to current count
  function handleIncrement() {
    setCount(count + 1);
  }

  // Decrement function — subtracts 1 from current count
  function handleDecrement() {
    setCount(count - 1);
  }

  // Reset function — resets count back to 0
  function handleReset() {
    setCount(0);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>Counter App</h1>
        <p style={styles.subtitle}>Exercise 3 — useState Hook & Event Handling</p>

        {/* Display current counter value — updates automatically when state changes */}
        <div style={{
          ...styles.countBox,
          color: count > 0 ? "#2f9e44" : count < 0 ? "#c92a2a" : "#1a1a2e",
          borderColor: count > 0 ? "#2f9e44" : count < 0 ? "#c92a2a" : "#dee2e6",
        }}>
          {count}
        </div>

        {/* Status label */}
        <p style={styles.status}>
          {count > 0 ? "Positive" : count < 0 ? "Negative" : "Zero"}
        </p>

        {/* Buttons — onClick calls the handler functions */}
        <div style={styles.buttonRow}>

          {/* Decrement button */}
          <button
            style={styles.btnDecrement}
            onClick={handleDecrement}
          >
            − Decrease
          </button>

          {/* Reset button */}
          <button
            style={styles.btnReset}
            onClick={handleReset}
          >
            Reset
          </button>

          {/* Increment button */}
          <button
            style={styles.btnIncrement}
            onClick={handleIncrement}
          >
            + Increase
          </button>

        </div>

        {/* Info section explaining what's happening */}
        <div style={styles.infoBox}>
          <p style={styles.infoText}>
            Current State: <strong>count = {count}</strong>
          </p>
          <p style={styles.infoText}>
            Every click calls <code>setCount()</code> which triggers a re-render
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "48px 40px",
    width: "380px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 6px",
  },
  subtitle: {
    fontSize: "12px",
    color: "#6c757d",
    margin: "0 0 36px",
  },
  countBox: {
    fontSize: "80px",
    fontWeight: "700",
    border: "3px solid",
    borderRadius: "20px",
    width: "160px",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px",
    transition: "color 0.3s, border-color 0.3s",
  },
  status: {
    fontSize: "14px",
    color: "#6c757d",
    margin: "0 0 32px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "28px",
  },
  btnIncrement: {
    backgroundColor: "#2f9e44",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnDecrement: {
    backgroundColor: "#c92a2a",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  btnReset: {
    backgroundColor: "#f1f3f5",
    color: "#495057",
    border: "none",
    borderRadius: "10px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  infoBox: {
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    padding: "14px 16px",
    textAlign: "left",
  },
  infoText: {
    fontSize: "12px",
    color: "#6c757d",
    margin: "4px 0",
  },
};

export default Counter;
