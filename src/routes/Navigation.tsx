import { Suspense } from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import logo from '../assets/React-icon.svg.png'
import { routes } from './routes';

export const Navigation = () => {
  return (

    <Suspense fallback={ <span> Loading.... </span> } >
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ logo } style={{
                    width: '150px'
                }}/>
            <ul>
                {
                    routes.map( ({ to, name, path }) => (
                                
                        <li key={ path } >
                            <NavLink 
                                to={ to } 
                                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                            > 
                                { name } 
                            </NavLink>
                        </li>
                    ))
                }
               
            </ul>
            </nav>
            <Routes>
          
                {
                    routes.map( ({ path, Component, name}) =>(
                        <Route 
                            key={ name }
                            path={ path } 
                            element={ <Component/> } 
                        />
                
                    ))
                }

                <Route path="/*" element={ <Navigate to={ routes[0].to }  replace/>}  />
            </Routes>

        </div>
    </BrowserRouter>
    </Suspense>
  )
}
