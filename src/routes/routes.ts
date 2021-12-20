import { lazy, LazyExoticComponent } from "react";
import { NoLazy,LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages';
type JSXComponent = () =>JSX.Element;
interface Route{
  id:number,
  name:string,
  path:string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  children?:Route[]
};
interface ChildrenRoutes{
  id:number,
  name:string,
  path:string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
}
const LazyModule =lazy(()=>import(/*webpackChunkName:"LazyLayoutPage" */"../01-lazyload/layout/LazyLayout"))


export const routes:Route[] =[
  {
    id: 0,
    name:"Lazy Load nested",
    path:"/lazyload",
    Component: LazyModule,
  },
  {
    id: 1,
    name:"No Lazy Load",
    path:"/nolazyload",
    Component: NoLazy,
  },
];

export const childrenRoutes:ChildrenRoutes[]=[
  {
    id: 0,
    name:"Lazy Page 1",
    path:"lazypage1",
    Component: LazyPage1,
  },
  {
    id: 1,
    name:"Lazy Page 2",
    path:"lazypage2",
    Component: LazyPage2,
  },
  {
    id: 2,
    name:"Lazy Page 3",
    path:"lazypage3",
    Component: LazyPage3,
  },
]