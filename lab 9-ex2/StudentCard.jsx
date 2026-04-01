// StudentCard.jsx
// This is the CHILD component — reusable card that accepts props

function StudentCard(props) {
  // props contains the data passed from the parent component
  // We access them using props.name, props.department, props.marks

  return (
    <div style={styles.card}>
      {/* Avatar circle — shows first letter of name dynamically */}
      <div style={styles.avatar}>
        {props.name.charAt(0)}
      </div>

      {/* Student Name — rendered using props */}
      <h2 style={styles.name}>{props.name}</h2>

      {/* Department — rendered using props */}
      <p style={styles.department}>{props.department}</p>

      <div style={styles.divider}></div>

      {/* Marks — rendered using props */}
      <div style={styles.marksBox}>
        <span style={styles.marksLabel}>Marks</span>
        <span style={styles.marksValue}>{props.marks} / 100</span>
      </div>

      {/* Grade based on marks — calculated using props.marks */}
      <div style={{
        ...styles.gradeBadge,
        backgroundColor: props.marks >= 90 ? "#d3f9d8" :
                         props.marks >= 75 ? "#d0ebff" :
                         props.marks >= 60 ? "#fff3bf" : "#ffe3e3",
        color: props.marks >= 90 ? "#2f9e44" :
               props.marks >= 75 ? "#1971c2" :
               props.marks >= 60 ? "#e67700" : "#c92a2a",
      }}>
        {props.marks >= 90 ? "Grade: O" :
         props.marks >= 75 ? "Grade: A" :
         props.marks >= 60 ? "Grade: B" : "Grade: C"}
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px 24px",
    width: "240px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  avatar: {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#3b5bdb",
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 4px",
  },
  department: {
    fontSize: "13px",
    color: "#6c757d",
    margin: "0",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e9ecef",
    margin: "16px 0",
  },
  marksBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  marksLabel: {
    fontSize: "13px",
    color: "#6c757d",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.6px",
  },
  marksValue: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#1a1a2e",
  },
  gradeBadge: {
    display: "inline-block",
    padding: "4px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "600",
  },
};

// Export so App.jsx can import and use it
export default StudentCard;
