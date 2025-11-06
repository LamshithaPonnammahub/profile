import React, { useState } from "react";
import "./App.css";
import { FaSearch, FaBell, FaShoppingCart } from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("home"); // "home" or "signin"
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleSignIn = (e) => {
    e.preventDefault();
    if (loginData.username === "admin" && loginData.password === "admin") {
      alert("✅ Signed in successfully!");
      setActiveTab("home");
    } else {
      alert("❌ Invalid credentials!");
    }
  };

  // ---------------- SIGN IN PAGE ----------------
  const SignInPage = () => (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-5" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">Sign In</h3>
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={loginData.username}
              onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" id="remember" />{" "}
              <label htmlFor="remember" className="text-muted small">
                Remember me
              </label>
            </div>
            <a href="#" className="text-primary small">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill">
            Continue
          </button>
        </form>
        <hr />
        <button className="btn btn-outline-danger w-100 mb-2 rounded-pill">
          Continue with Google
        </button>
        <button className="btn btn-outline-primary w-100 rounded-pill">
          Continue with Facebook
        </button>
        <button
          onClick={() => setActiveTab("home")}
          className="btn btn-link w-100 mt-3 text-decoration-none"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );

  // ---------------- HOME PAGE ----------------
  const HomePage = () => (
    <>
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">
            ExploreEase
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mx-2">
                <FaSearch />
              </li>
              <li className="nav-item mx-2">
                <FaBell />
              </li>
              <li className="nav-item mx-2">
                <FaShoppingCart />
              </li>
              <li className="nav-item mx-2">
                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => setActiveTab("signin")}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="fw-bold mb-3">
            Discover{" "}
            <span className="text-purple">People, Places, Products & Programs</span>
          </h1>
          <p className="text-muted mb-4">
            ExploreEase helps you connect with the world around you — from professionals to local events.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
            className="btn btn-outline-primary rounded-pill px-4"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* ✅ Add Your Own Section */}
      <section className="container py-5">
        <h3 className="fw-bold mb-4 text-center">
          Add your <span className="text-purple">own</span>
        </h3>

        <div className="row g-4">
          {[
            {
              title: "People",
              text: "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
              icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
            },
            {
              title: "Place",
              text: "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
              icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            },
            {
              title: "Product",
              text: "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
              icon: "https://cdn-icons-png.flaticon.com/512/126/126510.png",
            },
            {
              title: "Program",
              text: "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
              icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
            },
          ].map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-3">
              <div className="card shadow-sm text-center p-4 h-100 hover-card">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mx-auto mb-3"
                  style={{ width: "45px", height: "45px" }}
                />
                <h5 className="fw-semibold mb-2 text-purple">{item.title}</h5>
                <p className="text-muted small mb-3">{item.text}</p>
                <button
                  onClick={() => alert(`You clicked Add ${item.title}`)}
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Add {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Add Listing Section */}
      <section className="container py-5">
        <div className="row align-items-center bg-light-purple rounded-4 p-5 mx-1">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">
              Add your <span className="text-purple">Listing</span>
            </h3>
            <p className="text-muted">
              Are you an expert, professional, teacher, or seller? Share your offerings and connect with
              others who share your hobby or passion.
            </p>
            <button
              className="btn btn-primary rounded-pill px-4 mt-3"
              onClick={() => alert("Add Listing Clicked!")}
            >
              Add New Listing
            </button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/add-item-to-list-4482450-3727929.png"
              alt="Add Listing Illustration"
              className="img-fluid"
              style={{ maxHeight: "260px" }}
            />
          </div>
        </div>
      </section>
    </>
  );

  // Render based on current tab
  return activeTab === "signin" ? <SignInPage /> : <HomePage />;
}

export default App;
