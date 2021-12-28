import { useEffect, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';
interface useProductArgs {
  product:Product,
  onChange?:(args:onChangeArgs) =>void,
  value?:number
}
const useProduct = ({onChange,product,value = 0}: useProductArgs) =>{
   const [counterArticle, setCouterArticle] = useState(value);
   let currentCounterArticle = 0;
   const increaseBy = (evt:any)=>{
    if (counterArticle === 0 && evt.target.name === "button-minus") return setCouterArticle(0);
    if (evt.target.name === "button-minus") {
      currentCounterArticle = counterArticle - 1;
      setCouterArticle(currentCounterArticle);
    }else{
      currentCounterArticle = counterArticle + 1;
      setCouterArticle(currentCounterArticle)
    }
    onChange && onChange({count:currentCounterArticle,product});
  }
  useEffect(()=>{
    setCouterArticle(value);
  },[value]);
  return{
    counterArticle,
    increaseBy
  }
}

export default useProduct;