import { NavLink } from 'react-router-dom';

export const BuildRoutesComponent = ({route}:any) => {
  const {name,path} = route;
  return (
    <li>
      <NavLink
        to={path}
        activeClassName="nav-active"
        exact>
          {name}
      </NavLink>
    </li>
  )
}
