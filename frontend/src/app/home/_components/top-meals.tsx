"use client";

import { Category } from "@/library/type";
import Image from "next/image";
import React from "react";
import { v4 } from "uuid";
import Carousel from "@/components/carousel";

export default function TopMeals() {
  const foodCategories: Category[] = [
    {
      id: v4(),
      name: "Sandwich",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "South Indian",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "Desserts",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "Appetizers",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "Salad",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "Breakfast",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "Lunch",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
    {
      id: v4(),
      name: "Dinner",
      image:
        "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
    },
  ];

  return (
    <section className="py-[96px] space-y-10 flex flex-col items-center">
      <h3 className="font-montserrat font-bold uppercase text-3xl">
        Top Meals
      </h3>
      <Carousel<Category>
        itemsList={foodCategories}
        itemsPerSlide={4}
        slideItems={1}
        renderItem={(item) => (
          <div className="flex flex-col items-center space-y-4" key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-full"
            />
            <span className="text-center">{item.name || ""}</span>
          </div>
        )}
      />
    </section>
  );
}
