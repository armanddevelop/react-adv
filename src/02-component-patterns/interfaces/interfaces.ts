import { ReactElement } from "react";

export interface ProductCardProps{
  product:Product,
  children?:ReactElement | ReactElement[]
}

export interface ProductContextProps{
  useProduct:Function,
  product:Product
}
export interface Product{
  id:string,
  title:string,
  img?:string,
  noTitleImage?:string,
}
export interface ProductCardHOCProps{
  ({ children, product }: ProductCardProps) : JSX.Element,
  Title: () => JSX.Element,
  Image: ({ img }: {img?: string}) => JSX.Element,
  Buttons:() => JSX.Element,
}