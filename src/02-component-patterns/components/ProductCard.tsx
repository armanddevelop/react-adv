import { createContext, ReactElement, CSSProperties} from "react";
import styles from "../styles/styles.module.css";
import useProduct from '../hooks/useProduct';
import { Product, ProductContextProps, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import { products } from '../data/products';

export interface Props{
  product:Product,
  //children?:ReactElement | ReactElement[],
  children:(args: ProductCardHandlers)=>JSX.Element
  className?:string,
  style?:CSSProperties
  onChange?:(args:onChangeArgs)=>void,
  value?:number,
  initialValues?:InitialValues
}


export const ProductContext = createContext({} as ProductContextProps);
const{Provider}= ProductContext;
export const ProductCard = ({children, product,className,style,onChange, value, initialValues}:Props) => {
 const {increaseBy,counterArticle,maxCount,isMaxCountReached, reset,} = useProduct({onChange,product,value, initialValues});
  return (
    <Provider value={{
      increaseBy,
      counterArticle,
      product,
      maxCount
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {
          children({
            count:counterArticle,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  )
}