// StudentProfile.jsx
// A functional component that displays a student's profile details

function StudentProfile() {
  // Step 1: Store student details in JavaScript variables
  const name = "Arun Kumar";
  const department = "Computer Science and Engineering";
  const year = "Second Year";
  const section = "Section B";
  const rollNumber = "CS2024021";
  const email = "arun.kumar@college.edu";

  // Step 2: Return JSX — HTML-like structure that React renders
  return (
    <div style={styles.container}>
      {/* Card wrapper */}
      <div style={styles.card}>

        {/* Avatar / Initials circle */}
        <div style={styles.avatar}>
          {/* We take the first letter of the name dynamically using JSX expression */}
          {name.charAt(0)}
        </div>

        {/* Student Name — using JSX curly braces to inject the variable */}
        <h1 style={styles.name}>{name}</h1>
        <p style={styles.roll}>{rollNumber}</p>

        {/* Divider line */}
        <div style={styles.divider}></div>

        {/* Profile details — each detail uses {variable} to render dynamically */}
        <div style={styles.detailsGrid}>

          <div style={styles.detailItem}>
            <span style={styles.label}>Department</span>
            <span style={styles.value}>{department}</span>
          </div>

          <div style={styles.detailItem}>
            <span style={styles.label}>Year</span>
            <span style={styles.value}>{year}</span>
          </div>

          <div style={styles.detailItem}>
            <span style={styles.label}>Section</span>
            <span style={styles.value}>{section}</span>
          </div>

          <div style={styles.detailItem}>
            <span style={styles.label}>Email</span>
            <span style={styles.value}>{email}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

// Simple inline styles to make the profile look nice
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f4f8",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "40px",
    width: "360px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    textAlign: "center",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#3b5bdb",
    color: "#ffffff",
    fontSize: "36px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  name: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 4px",
  },
  roll: {
    fontSize: "14px",
    color: "#6c757d",
    margin: "0",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e9ecef",
    margin: "24px 0",
  },
  detailsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    textAlign: "left",
  },
  detailItem: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  label: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#6c757d",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  },
  value: {
    fontSize: "15px",
    color: "#1a1a2e",
    fontWeight: "500",
  },
};

// Step 3: Export the component so App.js can use it
export default StudentProfile;
