
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Waitlist from './Waitlist'
import { useCallback, useEffect, useState } from "react";
import Landing from "../pages/Landing";


export default function MainNavbar() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isDarkTheme") === "true") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", !isDarkTheme);
  }, [isDarkTheme]);
    return(
        <>
            <BrowserRouter>
                <header id="header" className="fixed-top">
                    <div className="header-wrapper container d-flex align-items-center justify-content-lg-between space-between">
                        <div className="d-flex flex-row">
                            <Link className="logo me-auto me-lg-0" element="true" title="Home" to="/">
                                <img src="images/logo.png" alt="" className="img-fluid"/>
                            </Link>
                            <h1 className="logo me-auto me-lg-0">
                                <Link element="true" title="Landing" to="/">SendMe</Link>
                            </h1>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li><Link className="nav-link scrollto" href="#about">About</Link></li>
                                <li><Link className="nav-link scrollto" href="#services">Services</Link></li>
                                {/* <li><Link className="nav-link scrollto" href="#help">Help</Link></li>*/}
                                <li><Link className="nav-link scrollto btned" element="true" title="Waitlist" to="/">Join</Link></li>
                                <li className="theme-switcher">
                                <label htmlFor="toggle" className="dark-toggle-text">Switch Theme</label>
                                <label htmlFor="toggle" className="toggle nav-link">
                                    <input title="Theme" name="theme" id="toggle" type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
                                    <span className="slider"></span>
                                </label>
                                </li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    {/* <Route path="/saved" element={<About />} /> */}
                    <Route path="/settings" element={<Waitlist />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}