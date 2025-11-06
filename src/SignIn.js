import React, { useState } from "react";

export default function SignIn() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="card border-0 shadow-sm p-4 rounded-4 bg-light">
      <div className="d-flex justify-content-center mb-4">
        <h5
          className={`me-3 fw-bold cursor-pointer ${
            activeTab === "signin" ? "text-purple border-bottom border-2 border-purple" : "text-secondary"
          }`}
          onClick={() => setActiveTab("signin")}
        >
          Sign In
        </h5>
        <h5
          className={`fw-bold cursor-pointer ${
            activeTab === "join" ? "text-purple border-bottom border-2 border-purple" : "text-secondary"
          }`}
          onClick={() => setActiveTab("join")}
        >
          Join In
        </h5>
      </div>

      <button className="btn btn-outline-purple mb-2 w-100">
        <i className="bi bi-google me-2"></i> Continue with Google
      </button>
      <button className="btn btn-outline-purple mb-3 w-100">
        <i className="bi bi-facebook me-2"></i> Continue with Facebook
      </button>

      <div className="text-center mb-3 text-muted small">Or connect with</div>

      <form>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 small">
          <div>
            <input type="checkbox" className="form-check-input me-2" /> Remember me
          </div>
          <a href="/" className="text-decoration-none text-muted">Forgot password?</a>
        </div>

        <button className="btn btn-purple w-100">Continue</button>
      </form>
    </div>
  );
}
