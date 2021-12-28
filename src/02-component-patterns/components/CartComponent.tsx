import { ProductButtons, ProductImage } from ".";
import { useShoppingCard } from "../hooks/useShoppingCard";

import { ProductCard } from "./ProductCard";

export interface Props{
  card:string
}

export const CartComponent = ({card}:Props) => {
  const {shoppingCard, onProductCountChange} = useShoppingCard();
  return (
    <ProductCard
      product={shoppingCard[card]}
      className="bg-dark text-white"
      style={{width:"100px"}}
      key={shoppingCard[card].id}
      onChange={onProductCountChange}
      value={shoppingCard[card].count}
    >
    <ProductImage
      className="custom-image"
      style={{
        boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
      }}
    />
    <ProductButtons
      className="custom-buttons"
      style={{
        display:"flex",
        justifyContent:"center"
      }}
    />
    </ProductCard>
  )
}
