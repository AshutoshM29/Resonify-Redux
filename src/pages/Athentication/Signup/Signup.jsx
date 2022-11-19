import { useState } from "react";
import "../authentication.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../../store/authSlice";
import { validateEmail, validatePassword } from "../../../utils/validation.js";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passType, setPassType] = useState("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmailAndPass(email, password)) {
      dispatch(signUpUser({ firstName, lastName, email, password, navigate }));
    }
  };

  const visibilityHandler = () => {
    return passType === "password"
      ? setPassType("text")
      : setPassType("password");
  };

  const validateEmailAndPass = (email, password) => {
    if (validateEmail(email) && validatePassword(password)) {
      return true;
    } else if (!validateEmail(email)) {
      toast.error("Enter a valid email");
    } else if (!validatePassword(password)) {
      toast.error("Password must include a number, Minimum 6 char");
    }
  };

  return (
    <div className="authentication-page">
      <article className="container-form form-login">
        <div className="authentication-container-form">
          <form className="form" onSubmit={handleSubmit}>
            <h3 className="h3">SIGN UP</h3>
            <label htmlFor="email" className="input-label">
              Email:
            </label>
            <div className="input-icon">
            <input
              className="input"
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email ID"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            </div>
            <label htmlFor="fname" className="input-label">
              First Name:
            </label>
            <div className="input-icon">
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
            </div>

            <label htmlFor="lname" className="input-label">
              Last Name:
            </label>
            <div className="input-icon">
            <input
              className="input"
              autoComplete="off"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            </div>

            <div className="input-with-icon">

              <label htmlFor="password" className="input-label">
                Password:
              </label>
              <div
                className="input-icon">
                {passType === "password" ? (
                  <button
                    className="btn-link material-icons icons-right"
                    onClick={visibilityHandler}
                  >visibility</button>
                ) : (
                  <button
                    className="btn-link material-icons icons-right"
                    onClick={visibilityHandler}
                  >visibility_off</button>
                )}
              <input
                className="input"
                type={passType}
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              </div>
            </div>

            <div className="container-checkbox">
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  name="tnc"
                  id="tnc"
                />
                <label htmlFor="tnc">
                  <span className="checkbox-detail">I accept all terms and conditions</span>
                </label>
              </div>
            </div>

            <button className="btn btn-primary-solid" type="submit" value="Register">
              Create New Account
            </button>
            <Link className="btn-link" to="/login">
              Already have an account &gt;
            </Link>
          </form>
        </div>
      </article>
    </div>
  );
};
export { Signup };