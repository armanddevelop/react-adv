import {ProductCard} from '../components/ProductCard';
import {ProductImage,ProductTitle,ProductButtons,HoCProductCard} from "../components";
import  "../styles/custom-styles.css";
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
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <HoCProductCard.Image className="custom-image"/>
          <HoCProductCard.Title/>
          <HoCProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
      </div>
      <hr/>
       <h1>Shopping Store</h1>
      <hr/>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <ProductCard
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image" style={{
            boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
          }}/>
          <ProductTitle/>
          <ProductButtons className="custom-buttons"/>
        </ProductCard>
      </div>
       <hr/>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        <ProductCard
          product={product}
          style={{
            backgroundColor:"#70D1f8"
          }}
        >
          <ProductImage style={{
            boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
          }}/>
          <ProductTitle style={{
            fontWeight:"bold"
          }}/>
          <ProductButtons style={{
            display:"flex",
            justifyContent:"end"
          }}/>
        </ProductCard>
      </div>
    </div>
  )
}
