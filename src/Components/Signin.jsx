import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://manuelnethan.pythonanywhere.com/api/signin",
        data
      );

      console.log(response);
      setLoading(false);

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-5 animated-background">
      <div
        className="col-md-6 p-4 form-container"
        style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "10px" }}
      >
        <h2 style={{ color: "white" }}>Sign In</h2>

        {loading && (
          <div className="d-flex justify-content-center my-3">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {error && (
          <p style={{ color: "red" }} className="text-center">
            {error}
          </p>
        )}

        <form onSubmit={submit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            style={{ backgroundColor: "beige", color: "black" }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            style={{ backgroundColor: "beige", color: "black" }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Forgot Password link */}
          <div className="text-end mb-3">
            <Link to="/ResetPassword" style={{ color: "#0d6efd" }}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <br />
        <p className="text-center" style={{ color: "white" }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
