"use client";

import Carousel from "@/components/carousel";
import { Restaurant } from "@/library/type";
import { Divider } from "@mui/material";
import AppRadio from "@/components/input/radio";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import { v4 } from "uuid";
import { FoodItems, FoodType, ingReducerAction } from "./data";
import { Choices } from "@/library/type";
import { onRenderInput } from "@/library/helper";
import MenuItem from "./menu-item";
import { IngredientContext } from "./ingredients-context";

const ingReducer = (state: string[], action: ingReducerAction) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item: string) => item !== action.payload);
    default:
      return [];
  }
};

const restaurants: Restaurant[] = [
  {
    id: v4(),
    name: "Krishna restaurant",
    description: "Best in you locality",
    image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
    open: true,
  },
  {
    id: v4(),
    name: "Krishna restaurant",
    description: "Best in you locality",
    image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
    open: true,
  },
  {
    id: v4(),
    name: "Krishna restaurant",
    description: "Best in you locality",
    image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
    open: true,
  },
  {
    id: v4(),
    name: "Krishna restaurant",
    description: "Best in you locality",
    image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
    open: true,
  },
];

export default function page({ params }: { params: { id: string } }) {
  const [filters, setFilters] = useState({
    food_type: "all",
    food_category: "all",
  });
  const [ingredients, dispatchIng] = useReducer(ingReducer, []);
  console.log(ingredients);
  const Filters = () => (
    <div className="bg-[#F0F0F0] min-w-[300px] flex flex-col items-center justify-center p-4">
      <section className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold">Food Type</h2>
        <AppRadio
          id="restaurant-food-type-filter"
          orientation="vertical"
          options={FoodType}
          {...onRenderInput(filters, setFilters, "irr_report_type", "option")}
        />
      </section>
      <div className="border-t border-t-black my-8" />
      <section className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold">Food Category</h2>
        <AppRadio
          id="restaurant-food-type-filter"
          orientation="vertical"
          options={FoodType}
          {...onRenderInput(filters, setFilters, "irr_report_type", "option")}
        />
      </section>
    </div>
  );
  return (
    <div className="max-w-[1520px] mx-auto">
      <div className="p-4 max-w-[1520px]">
        <Carousel<Restaurant>
          itemsPerSlide={2}
          slideItems={1}
          itemsList={restaurants}
          renderItem={(restaurant) => (
            <Image
              alt={restaurant.name}
              src={restaurant.image}
              width={200}
              height={200}
              className="w-full h-[50vh] object-contain z-20"
            />
          )}
        />
        <Divider sx={{ marginTop: "3rem", marginBottom: "3rem" }} />
        <div className="flex space-x-4 w-full">
          <Filters />
          <div className="flex-1">
            {FoodItems.map((food) => (
              <MenuItem
                key={food.id}
                food={food}
                ingredients={ingredients}
                dispatchIng={dispatchIng}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
