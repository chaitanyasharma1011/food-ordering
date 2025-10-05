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
        "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg",
    },
    {
      id: v4(),
      name: "South Indian",
      image:
        "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
    },
    {
      id: v4(),
      name: "Desserts",
      image: "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg",
    },
    {
      id: v4(),
      name: "Appetizers",
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
    {
      id: v4(),
      name: "Salad",
      image:
        "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
    },
    {
      id: v4(),
      name: "Biryani",
      image:
        "https://images.pexels.com/photos/17649369/pexels-photo-17649369.jpeg",
    },
    {
      id: v4(),
      name: "Pizza",
      image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
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
