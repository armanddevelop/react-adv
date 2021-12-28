import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
export interface PropsProductButtons{
  className?:string,
  style?:CSSProperties
}
const ProductButtons =({className, style}:PropsProductButtons)=>{
  const  {increaseBy,counterArticle} = useContext(ProductContext);
  return(
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
       <button className={styles.buttonMinus} name="button-minus" value={-1} onClick={(e)=>increaseBy(e)}>-</button>
       <div className={`${styles.countLabel}`}>{counterArticle}</div>
       <button className={styles.buttonAdd} name="button-add" value={1} onClick={(e)=>increaseBy(e)}>+</button>
    </div>
  );
};
export default ProductButtons;