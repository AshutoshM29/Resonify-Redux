import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { HeroIcon } from "../../asset/index";

const Navbar = () => {
  const {
    user: { token },
  } = useSelector((state) => state.auth);

  const Dispatch = useDispatch();

  return (
    <nav className="header">
      <header className="nav-bar">
        <div className="nav-section">
          <div className="section-navr">
            <Link to="/">
              <img className="hero-logo" loading="eager" src={HeroIcon} alt="Logo" />
            </Link>
            <Link to="/" className="nav-hero-heading">
              Resonify
            </Link>
          </div>
          <div className="input-icon icons-left">
            <button
              className="btn-icon"
            >
              <i className="material-icons">search</i>
            </button>
            <input
              className="input input-search"
              type="text"
              autoComplete="off"
              placeholder="Search !"
              id="search-bar"
              name="search-bar"
            />
          </div>
          <div className="section-iconr">
            {token ? (
            <button
              className="btn btn-primary-solid"
              onClick={() => {
                Dispatch(logout());
              }}
            >
              <Link className="btn-logout" to="/logout">
              <div id="icon"></div>
              <div id="title">Logout</div>
              </Link>
            </button>
            ) : (
            <Link to="/login" className="btn btn-primary-solid">
            <div id="icon"></div>
            <div id="title">Login</div>
            </Link>
            )}
          </div>
        </div>
      </header>
    </nav>
    );
};

export { Navbar };