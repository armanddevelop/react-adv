import { Props as  ProductCardProps } from '../components/ProductCard';
import {PropsProductTitle} from "../components/ProductTitle";
import {PropsProductButtons} from "../components/ProductButtons";
import {PropsProductImage} from "../components/ProductImage"

export interface ProductContextProps{
  counterArticle: number,
  increaseBy:(evt: any) => void,
  product:Product,
  maxCount?:number
}
export interface Product{
  id:string,
  title:string,
  img?:string,
  noTitleImage?:string,
}
export interface onChangeArgs {
  product:Product,
  count:number
}
export interface InitialValues{
  count?:number,
  maxCount?:number
}
export interface ProductCardHOCProps{
  ({ children, product }: ProductCardProps) : JSX.Element,
  Title: (Props: PropsProductTitle) => JSX.Element,
  Image: (Props: PropsProductImage) => JSX.Element,
  Buttons:(Props: PropsProductButtons) => JSX.Element,
}
export interface ProductInCart extends Product{
  count:number,
}
export interface ProductCardHandlers{
  count:number,
  isMaxCountReached:boolean,
  maxCount?:number,
  product:Product,
  increaseBy:(evt: any) => void,
  reset:()=>void
}