import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { childrenRoutes } from '../../routes/routes';

export const Navigation = () => {
  const {path, url} = useRouteMatch();
  const childrenPages = childrenRoutes.map(({path,name,id})=>{
    return(
      <li key={id}>
        <Link to={`${url}/${path}`}>{name}</Link>
      </li>
    );
  });
  const routeChildrens = childrenRoutes.map((route)=>
    <Route exact key={route.id} path={`${path}/${route.path}`} render={()=><route.Component/>}/>
  );
  return (
    <>
     <h2>LazyLayOut Pages</h2>
     <ul>
       {childrenPages}
     </ul>
     <Switch>
       {routeChildrens}
       <Redirect to={`${path}/lazypage1`}/>
     </Switch>
    </>
  )
}
