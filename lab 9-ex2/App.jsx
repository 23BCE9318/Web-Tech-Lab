// App.jsx
// This is the PARENT component
// It renders multiple StudentCard components with different data using props

import StudentCard from "./StudentCard";

function App() {
  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>Student Cards</h1>
      <p style={styles.subheading}>Exercise 2 — Component Reusability with Props</p>

      {/* We reuse the same <StudentCard /> component 4 times
          Each time we pass DIFFERENT data using props:
          name, department, marks */}
      <div style={styles.grid}>

        <StudentCard
          name="Arun Kumar"
          department="Computer Science"
          marks={92}
        />

        <StudentCard
          name="Bhuvaneswari"
          department="Electronics Engineering"
          marks={78}
        />

        <StudentCard
          name="Charan Reddy"
          department="Mechanical Engineering"
          marks={65}
        />

        <StudentCard
          name="Divya Priya"
          department="Civil Engineering"
          marks={55}
        />

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    fontFamily: "Segoe UI, sans-serif",
    padding: "40px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 8px",
  },
  subheading: {
    fontSize: "14px",
    color: "#6c757d",
    margin: "0 0 40px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    justifyContent: "center",
  },
};

export default App;
