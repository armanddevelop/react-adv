import {ProductCard} from '../components/ProductCard';
import {ProductImage,ProductTitle,ProductButtons} from "../components";
import  "../styles/custom-styles.css";
import { Product } from '../interfaces/interfaces';
import {useShoppingCard} from "../hooks/useShoppingCard";

export interface Props{
  product:Product,
}
export const PrincipalComponentCards = ({product}:Props) => {
  const {shoppingCard, onProductCountChange} = useShoppingCard();
  return (
    <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        onChange={onProductCountChange}
        value={shoppingCard[product.id]?.count || 0}
      >
      <ProductImage
        className="custom-image"
        style={{
          boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
        }}
      />
      <ProductTitle/>
      <ProductButtons className="custom-buttons"/>
    </ProductCard>
  )
}
