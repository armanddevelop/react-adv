import { Route, Routes, Navigate } from 'react-router-dom';
import {routes} from "../../routes/routes";
import { BuildNavigation } from '../../routes/buildNavigation';
const LazyLayout = () => {
  const childrenRoutes = routes.map((route)=><BuildNavigation key={route.id} route={route}/>);
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        {childrenRoutes}
      </ul>
      <Routes>
        {routes.map((route)=><Route key={route.id} path={route.path} element={<route.Component/>}/>)}
        <Route path="*" element={<Navigate replace to="lazy1"/>}/>
      </Routes>
    </div>
  )
};

export default LazyLayout;
