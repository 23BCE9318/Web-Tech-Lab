// ItemList.jsx
// Functional component to add and remove items using useState + map()

import { useState } from "react";

function ItemList() {

  // Array state — stores all list items
  const [items, setItems] = useState([
    { id: 1, name: "React JS" },
    { id: 2, name: "Node JS" },
    { id: 3, name: "MongoDB" },
  ]);

  // State for the new item input field
  const [inputValue, setInputValue] = useState("");

  // State for error message when input is empty
  const [error, setError] = useState("");

  // Add item — creates a new item object and appends to array
  function handleAdd() {
    if (!inputValue.trim()) {
      setError("Please enter an item name.");
      return;
    }
    const newItem = {
      id: Date.now(), // unique id using timestamp
      name: inputValue.trim(),
    };
    setItems([...items, newItem]); // spread old items + add new one
    setInputValue("");             // reset input field
    setError("");
  }

  // Remove item — filters out the item with matching id
  function handleRemove(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  // Allow adding item by pressing Enter key
  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>Item List Manager</h1>
        <p style={styles.subtitle}>Exercise 2 — List Rendering & Key Management</p>

        {/* Input row — for adding new items */}
        <div style={styles.inputRow}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); setError(""); }}
            onKeyDown={handleKeyDown}
            placeholder="Enter item name..."
            style={{
              ...styles.input,
              borderColor: error ? "#c92a2a" : "#dee2e6",
            }}
          />
          <button onClick={handleAdd} style={styles.addBtn}>+ Add</button>
        </div>
        {error && <p style={styles.errorText}>{error}</p>}

        <div style={styles.divider}></div>

        {/* Conditional rendering — show message if list is empty */}
        {items.length === 0 ? (
          <div style={styles.emptyBox}>
            <p style={styles.emptyText}>No items yet. Add something above!</p>
          </div>
        ) : (
          <ul style={styles.list}>
            {/* map() renders one <li> for each item */}
            {/* key={item.id} helps React track each item efficiently */}
            {items.map((item) => (
              <li key={item.id} style={styles.listItem}>
                <span style={styles.itemName}>{item.name}</span>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Item count */}
        <p style={styles.countText}>Total items: {items.length}</p>

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
    padding: "40px",
    width: "460px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 6px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "12px",
    color: "#6c757d",
    margin: "0 0 28px",
    textAlign: "center",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px 14px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "1.5px solid",
    outline: "none",
    color: "#1a1a2e",
    backgroundColor: "#f8f9fa",
    boxSizing: "border-box",
  },
  addBtn: {
    padding: "12px 20px",
    backgroundColor: "#3b5bdb",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  errorText: {
    color: "#c92a2a",
    fontSize: "12px",
    margin: "6px 0 0",
    fontWeight: "500",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e9ecef",
    margin: "20px 0",
  },
  emptyBox: {
    textAlign: "center",
    padding: "32px 0",
  },
  emptyText: {
    color: "#adb5bd",
    fontSize: "15px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    border: "1px solid #e9ecef",
  },
  itemName: {
    fontSize: "15px",
    color: "#1a1a2e",
    fontWeight: "500",
  },
  removeBtn: {
    padding: "6px 14px",
    backgroundColor: "#fff0f0",
    color: "#c92a2a",
    border: "1px solid #ffc9c9",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
  countText: {
    fontSize: "13px",
    color: "#6c757d",
    textAlign: "right",
    margin: "16px 0 0",
  },
};

export default ItemList;
