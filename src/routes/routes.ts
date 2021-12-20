import { lazy, LazyExoticComponent} from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import {LazyPage1,LazyPage2,LazyPage3} from '../01-lazyload/pages';


type JSXComponent = ()=>JSX.Element;
interface RouteLazy{
  to:string,
  path:string,
  Component:JSXComponent | LazyExoticComponent<JSXComponent>,
  name:string,
  id:number
}
interface Routes{
  to:string,
  path:string,
  Component:JSXComponent | LazyExoticComponent<JSXComponent>,
  name:string,
  id:number
}
const LazyLayout = lazy(()=>import(/*webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout"));
//const Lazy2 = lazy(()=>import(/*webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2"));
//const Lazy3 = lazy(()=>import(/*webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3"));

export const routesLazy: RouteLazy[]=[
  {
    to:"/lazyload",
    path:"/lazyload/*",
    Component:LazyLayout,
    name:"Lazy Layout",
    id:1
  },
  {
    to:"/nolazy",
    path:"nolazy",
    Component:NoLazy,
    name:"No lazy",
    id:2
  },
];

export const routes: Routes[]=[
  {
    to:"lazy1",
    path:"lazy1",
    Component:LazyPage1,
    name:"Lazy 1 Component",
    id:0
  },
  {
    to:"lazy2",
    path:"lazy2",
    Component:LazyPage2,
    name:"Lazy 2 Component",
    id:1
  },
  {
    to:"lazy3",
    path:"lazy3",
    Component:LazyPage3,
    name:"Lazy 3 Component",
    id:2
  },
]