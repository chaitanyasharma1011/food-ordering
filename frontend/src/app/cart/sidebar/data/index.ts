export interface Ingredients {
  id: string;
  name: string;
}

export interface CartItem {
  id: string;
  img: string;
  name: string;
  quantity: number;
  price: number;
  ingredients: Ingredients[];
}
