import { useState,useEffect,useRef } from "react";


function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="password-container">
        <h2>3. Password Toggle Input</h2>
      <label htmlFor="password">Password:</label>
      <div className="input-group">
        <input
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          id="password"
          ref={inputRef}
          className="password-input"
          placeholder="Enter your password"
        />
        <button onClick={togglePassword} className="toggle-btn">
          {showPassword ? '🙈 Hide' : '👁 Show'}
        </button>
      </div>
    </div>
  );
}

export default PasswordToggle;


