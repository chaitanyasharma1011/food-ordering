import { Choices } from "@/library/type";
import { v4 } from "uuid";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  categories: Record<string, Choices[]>;
}

export interface ingReducerAction {
  type: "ADD_ITEM" | "REMOVE_ITEM";
  payload: string;
}

export const FoodType: Choices[] = [
  {
    id: v4(),
    option: "all",
    label: "All",
  },
  {
    id: v4(),
    option: "veg",
    label: "Vegeterian",
  },
  {
    id: v4(),
    option: "nonVeg",
    label: "Non Vegeterian",
  },
  {
    id: v4(),
    option: "seasonal",
    label: "Seasonal",
  },
];

export const FoodCategory: Choices[] = [
  {
    id: v4(),
    option: "all",
    label: "All",
  },
  {
    id: v4(),
    option: "pizza",
    label: "Pizza",
  },
  {
    id: v4(),
    option: "biryani",
    label: "Biryani",
  },
  {
    id: v4(),
    option: "burger",
    label: "Burger",
  },
];

export const FoodItems: FoodItem[] = [
  {
    id: v4(),
    name: "Burger",
    price: 1000,
    description:
      "Consists of fillings and feelings to delight your heart with a tasty and yummy taste and you will be bound to order it second time.",
    image: "https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg",
    categories: {
      "Nuts & Seeds": [
        {
          id: v4(),
          label: "Cashews",
          option: "Cashews",
        },
      ],
      Protein: [
        {
          id: v4(),
          label: "Ground Beef",
          option: "Ground Beef",
        },
        {
          id: v4(),
          label: "Bacon Strips",
          option: "Bacon Strips",
        },
      ],
      Bread: [
        {
          id: v4(),
          label: "Hamburger buns",
          option: "Hamburger buns",
        },
      ],
      Vegetable: [
        {
          id: v4(),
          label: "Lettuce",
          option: "Lettuce",
        },
        {
          id: v4(),
          label: "Tomato Slices",
          option: "Tomato Slices",
        },
        {
          id: v4(),
          label: "Pickles",
          option: "Pickles",
        },
        {
          id: v4(),
          label: "Onion Slices",
          option: "Onion Slices",
        },
      ],
      Condiment: [
        {
          id: v4(),
          label: "Ketchup",
          option: "Ketchup",
        },
      ],
    },
  },
];
