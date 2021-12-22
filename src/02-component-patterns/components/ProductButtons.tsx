import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

const ProductButtons =()=>{
   const {useProduct} = useContext(ProductContext);
   const {increaseBy,counterArticle} = useProduct();
  return(
    <div className={styles.buttonsContainer}>
       <button className={styles.buttonMinus} name="button-minus" onClick={(e)=>increaseBy(e)}>-</button>
       <div className={styles.countLabel}>{counterArticle}</div>
       <button className={styles.buttonAdd} name="button-add" onClick={(e)=>increaseBy(e)}>+</button>
    </div>
  );
};
export default ProductButtons;