import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Landing from "../pages/Landing";


export default function DashNav() {
  return (
    <>
      <BrowserRouter>
        <nav className="dashnavbar">
          <ul className="dashnavbar-nav">
            <li className="logo">
              {/* <img src={logo} alt="SendMe Logo" /> */}
              <Link element="true" title="Dashboard" to="/" className="dashnav-link">
                <span className="link-text">SendMe</span>
              </Link>
            </li>
            <li className="dashnav-item">
              <Link element="true" title="Dashboard" to="/" className="dashnav-link active">
                <i className="bi-house-door-fill"></i>
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className="dashnav-item">
              <Link element="true" title="Save" to="/saved" className="dashnav-link">
                <i className="bi-bookmark"></i>
                <span className="link-text">Saved</span>
              </Link>
            </li>
            <li className="dashnav-item">
              <Link element="true" title="Settings" to="/settings" className="dashnav-link">
                <i className="bi-gear"></i>
                <span className="link-text">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          {/*<Route path="/word/:word" element={<WordPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
