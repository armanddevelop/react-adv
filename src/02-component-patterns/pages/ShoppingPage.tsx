import {ProductCard} from '../components/ProductCard';
import {ProductImage,ProductTitle,ProductButtons} from "../components";
import  "../styles/custom-styles.css";
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues = {{
            count:3,
            //maxCount:12,
        }}
      >
        {
          ({reset,maxCount,isMaxCountReached,count,increaseBy})=>(
            <>
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
                }}
              />
              <ProductTitle/>
              <ProductButtons
                className="custom-buttons"
                addButton="button-add"
                subtractButton = "button-subtract"
              />
              <button onClick={reset}>Reset</button>
              <button value={2} name="button-subtract" onClick={(e)=>increaseBy(e)}>-2</button>
              {!isMaxCountReached && <button name="button-add" value={2} onClick={(e)=>increaseBy(e)}>2</button>}
              <span>{count} - {maxCount}</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
