"use client";

import Carousel from "@/components/carousel";
import { Choices, Restaurant } from "@/library/type";
import { Divider } from "@mui/material";
import AppRadio from "@/components/input/radio";
import Image from "next/image";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { v4 } from "uuid";
import { FoodItems, FoodType, ingReducerAction } from "./data";
import { onRenderInput } from "@/library/helper";
import MenuItem from "./menu-item";
import { useFetchRestaurantQuery } from "@/redux/slices/restaurant/restaurantApiSlice";
import { useFetchCategories } from "@/redux/slices/categories/categoriesApiSlice";

interface RestaurantImages {
  id: string;
  image: string;
}

interface Filter {
  food_type: string;
  food_category: string;
}
const ingReducer = (state: string[], action: ingReducerAction) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item: string) => item !== action.payload);
    default:
      return [];
  }
};

export default function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const [filters, setFilters] = useState<Filter>({
    food_type: "",
    food_category: "",
  });
  const [ingredients, dispatchIng] = useReducer(ingReducer, []);
  const [
    fetchRestasurant,
    { data: apiResponse, error = {}, isLoading = false },
  ] = useFetchRestaurantQuery();

  const [fetchCategories, fetchedCategories] = useFetchCategories();
  const { data } = fetchedCategories;
  const { data: categories = [] } = data || {};
  console.log(data);

  const { images = [] } = apiResponse?.data || { images: [] };

  const getCategories = useMemo(
    () => [
      { id: "all", option: "", label: "All" },
      ...categories?.map(({ id, name }: { id: string; name: string }) => ({
        id,
        option: id,
        label: name,
      })),
    ],
    [categories]
  );

  useEffect(() => {
    fetchRestasurant({ id });
    fetchCategories({ id });
  }, []);

  const Filters = ({
    filters,
    setFilters,
    categories,
  }: {
    filters: Filter;
    setFilters: React.Dispatch<React.SetStateAction<Filter>>;
    categories: Choices[];
  }) => (
    <div className="bg-[#F0F0F0] min-w-[300px] flex flex-col items-center justify-center p-4">
      <section className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold">Food Type</h2>
        <AppRadio
          id="restaurant-food-type-filter"
          orientation="vertical"
          options={FoodType}
          {...onRenderInput(filters, setFilters, "food_type", "")}
        />
      </section>
      <div className="border-t border-t-black my-8" />
      <section className="flex flex-col space-y-4">
        <h2 className="text-xl font-semibold">Food Category</h2>
        <AppRadio
          id="restaurant-food-type-filter"
          orientation="vertical"
          options={categories}
          {...onRenderInput(filters, setFilters, "food_category", "")}
        />
      </section>
    </div>
  );
  if (isLoading)
    return (
      <div className="flex w-full h-full items-center justify-center">
        Loading....
      </div>
    );
  return (
    <div className="max-w-[1520px] mx-auto">
      <div className="p-4 max-w-[1520px]">
        <Carousel<RestaurantImages>
          itemsPerSlide={2}
          slideItems={1}
          itemsList={images.map((image: string, index: number) => ({
            id: index,
            image,
          }))}
          renderItem={(entry: RestaurantImages) => (
            <Image
              alt={entry.image}
              src={entry.image}
              width={200}
              height={200}
              className="w-full h-[50vh] object-contain z-20"
            />
          )}
        />
        <Divider sx={{ marginTop: "3rem", marginBottom: "3rem" }} />
        <div className="flex space-x-4 w-full">
          <Filters
            filters={filters}
            setFilters={setFilters}
            categories={getCategories}
          />
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
