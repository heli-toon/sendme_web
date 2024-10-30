import { Link } from "react-router-dom";

export default function TopNav() {
    return(
        <>
            <nav className="top-navbar">
                <div className="left-sidenav">
                    <form className="search-box" action="/search" method="POST">
                        <Link title="Search" type="submit" to="/">
                            <i className="bi bi-search"></i>
                        </Link>
                        <input className="search-input" type="search" placeholder="Type a search term" name="username" title="Search" id="search" />
                        <button title="Submit search" className="submit-search btn" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
                <ul className="top-navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-icon-button active" title="Home"
                            ><i className="bi bi-house-door-fill"></i>
                        </Link>
                    </li>
                    <li className="nav-item has-dropdown">
                    <a href="#" className="nav-icon-button" title="More">
                        <i className="bi bi-caret-down-fill"></i>
                    </a>
                    <ul className="nav-dropdown">
                        <li className="nav-dropdown-menu-item">
                        <Link to="/settings"><i className="bi bi-gear-fill"></i> Settings</Link>
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <Link to="/profile/{{user.username}}"
                            ><i className="bi bi-person-fill"></i> Profile</Link>
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <Link to="/feedback"
                            ><i className="bi bi-chat-square-dots-fill"></i> Feedback</Link>
                        </li>
                        <li className="nav-dropdown-menu-item">
                            <Link to="/chat">
                                <i className="bi bi-chat-left-text-fill"></i> Chat
                            </Link>
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <Link to="/games"><i className="bi bi-joystick"></i> Games</Link>
                        </li>
                        <li className="nav-dropdown-menu-item">
                            <Link to="/login"><i className="bi bi-door-open-fill"></i> Log Out</Link>
                        </li>
                    </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}