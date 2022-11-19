import { useState } from "react";
import "../authentication.css";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const login = (email, password) => {
    dispatch(loginUser({ email, password }));
  };

  const loginWithGuest = (e) => {
    e.preventDefault();
    login("ashutoshrm01@gmail.com", "ashu@1234");
  };

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="authentication-page">
      <article className="container-form form-login">
        <div className="authentication-container-form">
          <form className="form" onSubmit={loginFormSubmitHandler}>
            <h3 className="h3">LOGIN</h3>
            <label htmlFor="email" className="input-label">
              Email Address:{" "}
            </label>
            <div className="input-icon icons-left">
              <span className="material-icons">email</span>
              <input
                className="input"
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email ID"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <label htmlFor="password" className="input-label">
              Password:{" "}
            </label>
            <div className="input-icon icons-left">
              <span className="material-icons">lock</span>
              <input
                className="input"
                type={passType}
                id="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="container-checkbox">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label htmlFor="remember-me">
                  <span className="checkbox-detail">Remember me</span>
                </label>
              </div>
              <Link to="/" className="btn-link">
                Forgot Password?
              </Link>
            </div>

            <button className="btn btn-primary-solid" type="submit">
              Login
            </button>
            <button
              className="btn btn-primary-outline"
              onClick={loginWithGuest}
            >
              Login with test credentials
            </button>
            <Link to="/signup" className="btn-link">
              Create New Account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};

export { Login };