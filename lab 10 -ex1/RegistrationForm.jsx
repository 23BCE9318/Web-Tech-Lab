// RegistrationForm.jsx
// Controlled form component with validation using useState

import { useState } from "react";

function RegistrationForm() {

  // State for form input values — controlled components
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for validation error messages
  const [errors, setErrors] = useState({});

  // State to show success message after submission
  const [submitted, setSubmitted] = useState(false);

  // onChange handler — updates the correct field in formData
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for this field as user types
    setErrors({ ...errors, [name]: "" });
  }

  // Validation function — checks all fields and returns errors object
  function validate() {
    const newErrors = {};

    // Name validation — must not be empty
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // Email validation — must not be empty and must match email format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Password validation — must not be empty and at least 6 chars
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  }

  // onSubmit handler
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default page reload

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      // Validation failed — show errors
      setErrors(validationErrors);
    } else {
      // Validation passed — show success and reset form
      setSubmitted(true);
      setFormData({ name: "", email: "", password: "" });
      setErrors({});

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.title}>User Registration</h1>
        <p style={styles.subtitle}>Exercise 1 — Controlled Components & Form Validation</p>

        {/* Success message — shown after valid submission */}
        {submitted && (
          <div style={styles.successBox}>
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          {/* Name Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{
                ...styles.input,
                borderColor: errors.name ? "#c92a2a" : "#dee2e6",
              }}
            />
            {/* Conditional rendering — show error only if it exists */}
            {errors.name && <p style={styles.errorText}>{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                ...styles.input,
                borderColor: errors.email ? "#c92a2a" : "#dee2e6",
              }}
            />
            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{
                ...styles.input,
                borderColor: errors.password ? "#c92a2a" : "#dee2e6",
              }}
            />
            {errors.password && <p style={styles.errorText}>{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>

        </form>
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
    width: "400px",
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
    margin: "0 0 32px",
    textAlign: "center",
  },
  successBox: {
    backgroundColor: "#d3f9d8",
    color: "#2f9e44",
    borderRadius: "10px",
    padding: "12px 16px",
    marginBottom: "20px",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "center",
  },
  fieldGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#495057",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.6px",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    fontSize: "15px",
    borderRadius: "10px",
    border: "1.5px solid",
    outline: "none",
    boxSizing: "border-box",
    color: "#1a1a2e",
    backgroundColor: "#f8f9fa",
    transition: "border-color 0.2s",
  },
  errorText: {
    color: "#c92a2a",
    fontSize: "12px",
    margin: "6px 0 0",
    fontWeight: "500",
  },
  submitBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#3b5bdb",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "8px",
  },
};

export default RegistrationForm;
