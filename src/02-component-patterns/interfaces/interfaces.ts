import { Props as  ProductCardProps } from '../components/ProductCard';
import {PropsProductTitle} from "../components/ProductTitle";
import {PropsProductButtons} from "../components/ProductButtons";
import {PropsProductImage} from "../components/ProductImage"
export interface ProductContextProps{
  useProduct:Function,
  product:Product,
}
export interface Product{
  id:string,
  title:string,
  img?:string,
  noTitleImage?:string,
}

export interface ProductCardHOCProps{
  ({ children, product }: ProductCardProps) : JSX.Element,
  Title: (Props: PropsProductTitle) => JSX.Element,
  Image: (Props: PropsProductImage) => JSX.Element,
  Buttons:(Props: PropsProductButtons) => JSX.Element,
}