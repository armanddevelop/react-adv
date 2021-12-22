import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({img=''})=>{
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
  return( <img className={styles.productImg} src={imgToShow} alt={titleAlt}/>);
};
export default ProductImage;

