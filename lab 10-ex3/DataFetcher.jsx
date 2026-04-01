// DataFetcher.jsx
// Fetches data from a public API using useEffect + useState
// Handles loading, error, and success states

import { useState, useEffect } from "react";

function DataFetcher() {

  // State for storing fetched data (array of users)
  const [users, setUsers] = useState([]);

  // State for loading indicator
  const [loading, setLoading] = useState(true);

  // State for error message
  const [error, setError] = useState("");

  // useEffect — runs once when component mounts (empty dependency array [])
  // This is where we perform the API call (side effect)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Fetching from a free public API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check if response is OK
        if (!response.ok) {
          throw new Error("Failed to fetch data. Please try again.");
        }

        const data = await response.json();
        setUsers(data);       // store fetched data in state
        setError("");
      } catch (err) {
        setError(err.message); // store error message in state
      } finally {
        setLoading(false);     // hide loading indicator
      }
    }

    fetchData(); // call the async function
  }, []); // [] means run only once on component load

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>User Directory</h1>
        <p style={styles.subtitle}>Exercise 3 — useEffect, Fetch API & Async/Await</p>

        {/* Conditional rendering — Loading state */}
        {loading && (
          <div style={styles.loadingBox}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Fetching data from API...</p>
          </div>
        )}

        {/* Conditional rendering — Error state */}
        {error && (
          <div style={styles.errorBox}>
            <p style={styles.errorText}>{error}</p>
          </div>
        )}

        {/* Conditional rendering — Success state: render list using map() */}
        {!loading && !error && (
          <ul style={styles.list}>
            {users.map((user) => (
              // key={user.id} — unique key for each list item
              <li key={user.id} style={styles.listItem}>
                <div style={styles.avatar}>{user.name.charAt(0)}</div>
                <div style={styles.userInfo}>
                  <p style={styles.userName}>{user.name}</p>
                  <p style={styles.userEmail}>{user.email}</p>
                  <p style={styles.userCompany}>{user.company.name}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total count */}
        {!loading && !error && (
          <p style={styles.countText}>{users.length} users fetched from API</p>
        )}

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
    width: "500px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    maxHeight: "90vh",
    overflowY: "auto",
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
  loadingBox: {
    textAlign: "center",
    padding: "48px 0",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e9ecef",
    borderTop: "4px solid #3b5bdb",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    margin: "0 auto 16px",
  },
  loadingText: {
    color: "#6c757d",
    fontSize: "14px",
  },
  errorBox: {
    backgroundColor: "#fff0f0",
    border: "1px solid #ffc9c9",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
  },
  errorText: {
    color: "#c92a2a",
    fontSize: "14px",
    fontWeight: "600",
    margin: 0,
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
    alignItems: "center",
    gap: "14px",
    padding: "14px 16px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    border: "1px solid #e9ecef",
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: "#3b5bdb",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1a1a2e",
    margin: "0 0 2px",
  },
  userEmail: {
    fontSize: "12px",
    color: "#3b5bdb",
    margin: "0 0 2px",
  },
  userCompany: {
    fontSize: "12px",
    color: "#6c757d",
    margin: 0,
  },
  countText: {
    fontSize: "13px",
    color: "#6c757d",
    textAlign: "right",
    margin: "16px 0 0",
  },
};

export default DataFetcher;
