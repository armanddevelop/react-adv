import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';
interface useProductArgs {
  product:Product,
  onChange?:(args:onChangeArgs) =>void,
  value?:number,
  initialValues?:InitialValues
}
const setMaxArticles = (maxCount:number, counterArticle:number)=>{
  let isMax;
  counterArticle >= maxCount ? isMax=true : isMax=false;
  return isMax;
}
const useProduct = ({onChange,product,value = 0, initialValues}: useProductArgs) =>{
   const [counterArticle, setCouterArticle] = useState<number>(initialValues?.count || value);
   const isMounted = useRef(false);
   let currentCounterArticle = 0;
   const increaseBy = (evt:any)=>{
    if ((counterArticle <= 1) && evt.target.name === "button-subtract") return setCouterArticle(0);
    if (evt.target.name === "button-subtract") {
      currentCounterArticle = counterArticle - parseInt(evt.target.value);
      setCouterArticle(currentCounterArticle);
    }else{
      currentCounterArticle = counterArticle + parseInt(evt.target.value);
      const maxArticle = initialValues?.maxCount || 0;
      const isSetMaxArticle = setMaxArticles(maxArticle, currentCounterArticle);
      maxArticle !== 0 ?
        isSetMaxArticle ? setCouterArticle(maxArticle) :
          setCouterArticle(currentCounterArticle) :
            setCouterArticle(currentCounterArticle)
    }
    onChange && onChange({count:currentCounterArticle,product});
  }
  const reset =()=>{
    setCouterArticle(initialValues?.count || value);
  }
  useEffect(()=>{
    if (!isMounted.current) return;
    setCouterArticle(value);
  },[value]);
  useEffect(()=>{
    isMounted.current = true;
  },[]);
  return{
    counterArticle,
    isMaxCountReached:setMaxArticles(initialValues?.maxCount || 0,counterArticle),
    maxCount:initialValues?.maxCount,
    increaseBy,
    reset
  }
}

export default useProduct;