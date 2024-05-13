import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Error404 from './pages/404'
import Error500 from './pages/500'
import SignUp from './pages/SignUp'
import Landing from './pages/Landing'
import Settings from './pages/Settings'
import Dashboard from './pages/Dashboard'
import NoInternet from './pages/NoInternet'
import './styles/main.css'
import './styles/bootstrap-icons.min.css'

import { useEffect, useState } from 'react'

export default function App() {
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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='/404' element={<Error404 />}></Route>
          <Route path='/500' element={<Error500 />}></Route>
          <Route path='/nointernet' element={<NoInternet />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}