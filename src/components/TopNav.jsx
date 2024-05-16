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
                        title="Post"
                        onFocus="event.preventDefault()"
                        onClick="event.preventDefault()"
                        ><i className="bi bi-plus-square-fill"></i
                    ></a>
                    <div className="nav-dropdown">
                        <div className="nav-dropdown-title">
                        <h4>Post</h4>
                        </div>
                        <div className="post-uploader">
                        <form action="upload" method="post" encType="multipart/form-data">
                            <label htmlFor="file-upload">
                            <div className="post-uploader-img">
                                <svg id="upload-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-12"
                                >
                                <path
                                    d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                                />
                                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                                </svg>
                                <img id="preview" src="#" alt="No image selected" />
                            </div>
                            </label>
                            <p>
                            Upload Photos<br />
                            please upload here ..
                            </p>
                            <div className="chooseupload">
                            <input
                                title="Upload a File"
                                type="file"
                                name="image_upload"
                                id="file-upload"
                                accept="image/*"
                                onChange="previewFile()"
                                required
                            />
                            <button type="button" href="#" className="btn">
                                Choose a File
                            </button>
                            </div>
                            <div>
                            <textarea
                                name="caption"
                                placeholder="Enter a Caption"
                                id=""
                                cols="28"
                                rows="10"
                                required
                            ></textarea>
                            <button type="submit" title="Post" href="#" className="btn">
                                Post
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
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
                        <a href="/logout"><i className="bi bi-door-open-fill"></i> Log Out</a>
                        </li>
                    </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}