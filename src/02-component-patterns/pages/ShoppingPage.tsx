import {ProductCard} from '../components/ProductCard';
import {ProductImage,ProductTitle,ProductButtons,HoCProductCard} from "../components";
const product = {
  id:"1",
  title:"coffee Muga-Card",
  img:"./coffee-mug.png",
  noTitleImage:"no-coffee"
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr/>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <ProductCard product={product}>
          <HoCProductCard.Image/>
          <HoCProductCard.Title/>
          <HoCProductCard.Buttons/>
        </ProductCard>
      </div>
      <hr/>
       <h1>Shopping Store</h1>
      <hr/>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  )
}
