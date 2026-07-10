import React from "react";

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="brand-icon">AI</div>
          <div>
            <h1>Welcome back</h1>
            <p>Sign in to continue</p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            <span>Password</span>
            <input type="password" placeholder="••••••••" required />
          </label>

          <button type="submit">Log In</button>
        </form>

        <div className="login-footer">
          <a href="#">Forgot password?</a>
          <p>
            New here? <a href="#">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
