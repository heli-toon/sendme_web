export default function TopNav() {
    return(
        <>
            <nav className="top-navbar">
                <div className="left-sidenav">
                    <form className="search-box" action="/search" method="POST">
                    <a
                        title="Search"
                        type="submit"
                        href="#"
                        onFocus="event.preventDefault()"
                        onClick="event.preventDefault()"
                        ><i className="bi bi-search"></i
                    ></a>
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Type a search term"
                        name="username"
                        title="Search"
                        id="search"
                    />
                    <button title="Submit search" className="submit-search btn" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                    </form>
                </div>
                <ul className="top-navbar-nav">
                    <li className="nav-item">
                    <a href="#" className="nav-icon-button active" title="Home"
                        ><i className="bi bi-house-door-fill"></i
                    ></a>
                    </li>
                    <li className="nav-item has-dropdown">
                    <a
                        href="#"
                        className="nav-icon-button"
                        title="More"
                        onFocus="event.preventDefault()"
                        onClick="event.preventDefault()"
                        ><i className="bi bi-caret-down-fill"></i
                    ></a>
                    <ul className="nav-dropdown">
                        <li className="nav-dropdown-menu-item">
                        <a href="/settings"><i className="bi bi-gear-fill"></i> Settings</a>
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <a href="/profile/{{user.username}}"
                            ><i className="bi bi-person-fill"></i> Profile</a
                        >
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <a href="/feedback"
                            ><i className="bi bi-chat-square-dots-fill"></i> Feedback</a
                        >
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <a href="/chat"
                            ><i className="bi bi-chat-left-text-fill"></i> Chat</a
                        >
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <a href="/games"
                            ><i className="bi bi-joystick"></i> Games</a
                        >
                        </li>
                        <li className="nav-dropdown-menu-item">
                        <a href="/login"><i className="bi bi-door-open-fill"></i> Log Out</a>
                        </li>
                    </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}