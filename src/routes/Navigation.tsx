import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { RegisterPage,FormikBasicPage,FormikYupPage,FormikComponents,FormikAbstractation } from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik yup page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" activeClassName="nav-active" exact>Formik Abstractation</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formik-components">
            <FormikComponents/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage/>
          </Route>
           <Route path="/formik-abstract">
            <FormikAbstractation/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}