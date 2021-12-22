import ProductImage from "./ProductImage";
import ProductTitle from "./ProductTitle";
import ProductButtons from './ProductButtons';
import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductCard as ProductCardHOC } from './ProductCard';

const HoCProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC,{
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});

export {ProductImage,ProductTitle,ProductButtons,HoCProductCard};