import { useState } from "react";
import { Product, ProductInCart } from '../interfaces/interfaces';

type typeProductInCart = {[key:string]:ProductInCart};

const deleteProduct =(obj:typeProductInCart, product:Product)=>{
 const canDelete = obj[product.id].count === 0;
      if (canDelete) delete obj[product.id];
      return obj;
}
export const useShoppingCard = () => {
   const [shoppingCard, setShoppingCard] = useState<{[key:string]:ProductInCart}>({});
   const onProductCountChange =({count,product}:{count:number,product:Product})=>{
     console.log("This is the value if count ",{count});
    setShoppingCard(oldStateShoppingCard =>{
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
