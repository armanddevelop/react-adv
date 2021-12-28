import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
export interface PropsProductTitle {
  className?:string,
  style?:CSSProperties,
  title?:number
}
export const ProductTitle = ({title,className,style}:PropsProductTitle)=>{
  const {product} = useContext(ProductContext);
  return(
  <span
    className={`${styles.productDescription} ${className}`}
    style={style}
  >{product.title} {title}</span>)
}
export default ProductTitle;