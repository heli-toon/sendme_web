import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function DashNav() {
  return (
    <>
        <nav className="dashnavbar">
          <ul className="dashnavbar-nav">
            <li className="logo">
              <img src={logo} alt="Wink Logo" />
              <Link title="Dashboard" to="/"className="dashnav-link">
                <span className="link-text">Wink</span>
              </Link>
            </li>
            <li className="dashnav-item">
              <Link title="Dashboard" to="/" className={location.pathname === '/' ? 'dashnav-link active' : 'dashnav-link '}>
                <i className="bi-house-door-fill"></i>
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className="dashnav-item">
              <Link title="Save" to="/post" className={location.pathname === '/post' ? 'dashnav-link active' : 'dashnav-link '}>
                <i className="bi-bookmark"></i>
                <span className="link-text">Saved</span>
              </Link>
            </li>
            <li className="dashnav-item">
              <Link title="Settings" to="/settings" className={location.pathname === '/settings' ? 'dashnav-link active' : 'dashnav-link '}>
                <i className="bi-gear"></i>
                <span className="link-text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
    </>
  );
}
