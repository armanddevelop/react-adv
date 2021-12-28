import { Product } from "../interfaces/interfaces";

const product1 = {
  id:"1",
  title:"coffee Mug-Card",
  img:"./coffee-mug.png",
  noTitleImage:"no-coffee"
};
const product2 = {
  id:"2",
  title:"coffee Mug-Meme",
  img:"./coffee-mug2.png",
  noTitleImage:"no-coffee-meme"
};

export const products:Product[] = [product1,product2];