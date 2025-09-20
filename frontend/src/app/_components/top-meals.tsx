"use client";

import { Category } from "@/library/type";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemsPerSlide = 4;
  const slideItems = 1;
  const totalSlides = Math.ceil(foodCategories.length / itemsPerSlide);

  const goToSlide = (index: number) => {
    let lastIndex = Math.max(foodCategories.length - itemsPerSlide, 0);
    if (index < 0) setCurrentIndex(lastIndex);
    else if (index >= foodCategories.length) setCurrentIndex(0);
    else setCurrentIndex(index);
  };

  const handleNext = () => goToSlide(currentIndex + 1);
  const handlePrevious = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let itemWidth = track.children[0].getBoundingClientRect().width;
    let scroll = itemWidth * currentIndex;
    track.style.transform = `translateX(-${scroll}px)`;
  }, [currentIndex]);

  return (
    <section className="py-[96px] space-y-10 flex flex-col items-center">
      <h3 className="font-montserrat font-bold uppercase text-3xl">
        Top Meals
      </h3>
      <div className="flex space-x-4 items-center px-4 w-full overflow-hidden">
        <GrLinkPrevious size={24} onClick={handlePrevious} className="z-30" />
        <div
          ref={trackRef}
          className="flex-1 flex transition-transform duration-200 w-full"
          style={{
            gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)`,
          }}
        >
          {foodCategories.map((category) => (
            <div
              className="flex flex-col items-center space-y-4"
              style={{
                minWidth: `calc(100% / ${itemsPerSlide})`,
              }}
              key={category.id}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                className="w-[200px] h-[200px] rounded-full"
              />
              <span className="text-center">{category.name}</span>
            </div>
          ))}
        </div>
        <GrLinkNext size={24} onClick={handleNext} className="z-30" />
      </div>
    </section>
  );
}
