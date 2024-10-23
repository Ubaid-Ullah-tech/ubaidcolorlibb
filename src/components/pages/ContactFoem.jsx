import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Send Successfully");

    // Clear the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Arial', sans-serif", // Ensuring clear font
    fontSize: "16px", // Proper font size to avoid blurriness
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333", // Darker text color for better visibility
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif", // Apply the same font style
    boxSizing: "border-box", // Ensure padding doesn't affect width
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Contact Form</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="name">
          Name:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        <label style={labelStyle} htmlFor="phone">
          Phone:
        </label>
        <input
          style={inputStyle}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        <label style={labelStyle} htmlFor="email">
          Email:
        </label>
        <input
          style={inputStyle}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        <label style={labelStyle} htmlFor="message">
          Message:
        </label>
        <textarea
          style={inputStyle}
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          style={buttonStyle}
          type="submit"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
