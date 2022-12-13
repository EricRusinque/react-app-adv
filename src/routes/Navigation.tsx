import { Route, Routes, NavLink, Navigate } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import logo from '../assets/React-icon.svg.png'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } style={{
                    width: '150px'
                }}/>
            <ul>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>about</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>users</NavLink>
                </li>
            </ul>
            </nav>
            <Routes>
                <Route path="home" element={ <h1>Home</h1> } />
                <Route path="about" element={ <h1>About</h1>  } />
                <Route path="users" element={ <h1>Users</h1> }  />

                <Route path="/*" element={ <Navigate to="/home"  replace/>}  />

            </Routes>


        </div>
    </BrowserRouter>
  )
}
