import { useState } from 'react';
const useProduct = ()=>{
   const [counterArticle, setCouterArticle] = useState(0);
   const increaseBy = (evt:any)=>{
    if(counterArticle === 0 && evt.target.name === "button-minus") return setCouterArticle(0);
    evt.target.name === "button-minus" ?
    setCouterArticle(counterArticle - 1) : setCouterArticle(counterArticle + 1);
  }
  return{
    counterArticle,
    increaseBy
  }

}

export default useProduct;