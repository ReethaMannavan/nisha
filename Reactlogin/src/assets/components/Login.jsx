import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";

    if (!form.password) errs.password = "Password is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setLoginError("");
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!validate()) return;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === form.email);

  if (!user) {
    setLoginError("User not registered. Redirecting to registration...");
    

    setTimeout(() => {
      navigate("/register");
    }, 2000);
  } else if (user.password !== form.password) {
    setLoginError("Invalid password. Please try again.");
  } else {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/home");
  }


  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {loginError && <p className="error-msg">{loginError}</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <small className="error-msg">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <small className="error-msg">{errors.password}</small>}
        </div>

        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
