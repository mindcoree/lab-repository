import { useState } from "react";

// Переиспользуемый компонент для input + ошибка
function FormInput({ type, placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          boxSizing: "border-box"
        }}
      />
      {error && <p style={{ color: "red", marginTop: "4px" }}>{error}</p>}
    </div>
  );
}

function RegistrationForm() {
  // Состояния полей
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // Состояния ошибок
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  // Состояние успеха
  const [success, setSuccess] = useState(false);

  // Валидация
  function validateName(name) {
    if (!name) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    return "";
  }

  function validateEmail(email) {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  }

  function validateAge(age) {
    if (!age) return "Age is required";
    if (Number(age) < 18) return "Age must be 18 or older";
    return "";
  }

  // Submit handler
  function handleSubmit(e) {
    e.preventDefault(); // не перезагружает страницу

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const ageErr = validateAge(age);

    setNameError(nameErr);
    setEmailError(emailErr);
    setAgeError(ageErr);

    if (nameErr || emailErr || ageErr) return;

    setSuccess(true);

    // Очистка полей
    setName("");
    setEmail("");
    setAge("");
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Registration Form
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <FormInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              setName(value);
              setNameError(validateName(value));
            }}
            error={nameError}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              setEmailError(validateEmail(value));
            }}
            error={emailError}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <FormInput
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              const value = e.target.value;
              setAge(value);
              setAgeError(validateAge(value));
            }}
            error={ageError}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%"
          }}
        >
          Submit
        </button>
      </form>

      {success && (
        <p
          style={{
            color: "green",
            marginTop: "16px",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Registration successful!
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;