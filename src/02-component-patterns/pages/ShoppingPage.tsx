import {ProductCard} from '../components/ProductCard';
import {ProductImage,ProductTitle,ProductButtons} from "../components";
import  "../styles/custom-styles.css";
import { products } from '../data/products';
import {useShoppingCard} from "../hooks/useShoppingCard";

export const ShoppingPage = () => {
  const {shoppingCard, onProductCountChange} = useShoppingCard();
  const productCardMap = products.map(product=>(
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
  ));
  const productCardObj =  Object.keys(shoppingCard).map((card)=>(
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
  ));
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        {productCardMap}
      </div>
      <div className="shopping-cart">
        {productCardObj}
      </div>
    </div>
  )
}
