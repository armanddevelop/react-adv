import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
export interface PropsProductTitle {
  className?:string,
  style?:CSSProperties
}
export const ProductTitle = ({className,style}:PropsProductTitle)=>{
  const {product} = useContext(ProductContext);
  return(
  <span
    className={`${styles.productDescription} ${className}`}
    style={style}
  >{product.title}</span>)
}
export default ProductTitle;