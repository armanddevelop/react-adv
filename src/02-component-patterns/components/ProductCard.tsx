import { createContext, ReactElement, CSSProperties} from "react";
import styles from "../styles/styles.module.css";
import useProduct from '../hooks/useProduct';
import {Product, ProductContextProps} from "../interfaces/interfaces";

export interface Props{
  product:Product,
  children?:ReactElement | ReactElement[],
  className?:string,
  style?:CSSProperties
}


export const ProductContext = createContext({} as ProductContextProps);
const{Provider}= ProductContext;
export const ProductCard = ({children, product,className,style}:Props) => {
  return (
    <Provider value={{
      useProduct,
      product,
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
}