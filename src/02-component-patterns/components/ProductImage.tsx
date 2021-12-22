import { CSSProperties, useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface PropsProductImage{
  img?:string,
  className?: string,
  style?:CSSProperties
}

export const ProductImage = ({className, img, style}:PropsProductImage)=>{
  const {product} = useContext(ProductContext);
  let imgToShow:string;
  let titleAlt:string | undefined;
  if (img) {
    imgToShow = img;
  }
  else if (product.img){
    imgToShow = product.img;
    titleAlt = product.title;
  }else {
    imgToShow = noImage;
    titleAlt = product.noTitleImage;
  }
  return(
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt={titleAlt}/>
  );
};
export default ProductImage;

