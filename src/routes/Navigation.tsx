import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from './routes';
import { BuildRoutesComponent } from './BuildRoutesComponent';
import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  const buildRoutesComponent = routes.map((route)=><BuildRoutesComponent key={route.id} route={route}/>);
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {buildRoutesComponent}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({id,path,Component})=>
              <Route
                key={id}
                path={path}
                render={()=><Component/>}
              />
            )};
              <Redirect to={routes[0].path}/>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}