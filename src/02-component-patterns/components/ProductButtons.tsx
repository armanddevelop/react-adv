import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
export interface PropsProductButtons{
  className?:string,
  style?:CSSProperties,
  addButton?:string,
  subtractButton?:string
}
const ProductButtons =({className, style,addButton,subtractButton}:PropsProductButtons)=>{
  const  {increaseBy,counterArticle,maxCount} = useContext(ProductContext);
  const isMaxReached = useCallback(() =>
  !!maxCount && counterArticle === maxCount
  ,[counterArticle,maxCount]);
  return(
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
       <button
          className={styles.buttonMinus}
          name={subtractButton}
          value={1}
          onClick={(e)=>increaseBy(e)}
        >-</button>
       <div className={`${styles.countLabel}`}>{counterArticle}</div>
       <button
          className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
          name={addButton}
          value={1}
          onClick={(e)=>increaseBy(e)}
          disabled={isMaxReached()}
        >+</button>
    </div>
  );
};
export default ProductButtons;