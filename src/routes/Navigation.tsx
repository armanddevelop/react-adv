import { Suspense } from "react";
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import{routesLazy} from "./routes";
import{BuildNavigation} from "./buildNavigation";
import logo from '../logo.svg';
const routesNavigation = routesLazy.map((route)=><BuildNavigation key={route.id} route={route}/>);

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="react-logo"></img>
              <ul>
                {routesNavigation}
              </ul>
          </nav>
          <Routes>
            {
              routesLazy.map(({id,path,Component})=><Route key={id} path={path} element={<Component/>}/>)
            }
            <Route path="/*" element={<Navigate to={routesLazy[0].to} replace/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
