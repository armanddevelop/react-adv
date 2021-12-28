import { useState } from "react";
import { Product, ProductInCart } from '../interfaces/interfaces';

type typeProductInCart = {[key:string]:ProductInCart};

const deleteProduct =(obj:typeProductInCart, product:Product)=>{
 const canDelete = obj[product.id].count === -1;
      if (canDelete) delete obj[product.id];
      return obj;
}
export const useShoppingCard = () => {
   const [shoppingCard, setShoppingCard] = useState<{[key:string]:ProductInCart}>({});
   const onProductCountChange =({count,product}:{count:number,product:Product})=>{
    setShoppingCard(oldStateShoppingCard =>{
      const productInCart:ProductInCart = oldStateShoppingCard[product.id] || {...product,count:0};
      if (Math.max(productInCart.count + count, 0) > 0){
        productInCart.count+=count;
        const infoProduct = {
          ...oldStateShoppingCard,
          [product.id]: productInCart
        }
        return infoProduct;
      }
      //delete the product
      const infoProduct = {
        ...oldStateShoppingCard,
        [product.id]: {...product,count}
      }
      const updateProduct = deleteProduct(infoProduct,product);
      return updateProduct;
    });
  }
  return {
    shoppingCard,
    onProductCountChange
  };
}
