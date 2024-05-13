import logo from "../assets/logo.png";

export default function DashNav() {
  return (
    <>
        <nav className="dashnavbar">
          <ul className="dashnavbar-nav">
            <li className="logo">
              <img src={logo} alt="SendMe Logo" />
              <a title="Dashboard" href="/"className="dashnav-link">
                <span className="link-text">SendMe</span>
              </a>
            </li>
            <li className="dashnav-item">
              <a title="Dashboard" href="/" className="dashnav-link active">
                <i className="bi-house-door-fill"></i>
                <span className="link-text">Home</span>
              </a>
            </li>
            <li className="dashnav-item">
              <a title="Save" href="/" className="dashnav-link">
                <i className="bi-bookmark"></i>
                <span className="link-text">Saved</span>
              </a>
            </li>
            <li className="dashnav-item">
              <a title="Settings" href="/settings" className="dashnav-link">
                <i className="bi-gear"></i>
                <span className="link-text">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
    </>
  );
}
