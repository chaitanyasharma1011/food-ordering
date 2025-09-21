import { Restaurant } from "@/library/type";
import React from "react";
import { v4 } from "uuid";

export default function Handpickedfavs() {
  const restaurants: Restaurant[] = [
    {
      id: v4(),
      name: "Krishna restaurant",
      description: "Best in you locality",
      image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg",
      open: true,
    },
  ];
  return (
    <section className="py-[96px] space-y-10 flex flex-col items-center">
      <h3 className="font-montserrat font-bold uppercase text-3xl">
        Handpicked Favourites
      </h3>
      <div className="grid grid-cols-3 gap-4 px-4 w-full">
        {restaurants.map((restaurant) => (
          <div
            className="w-full h-[400px] bg-cover relative rounded-2xl flex flex-col justify-end"
            style={{ backgroundImage: `url(${restaurant.image})` }}
            key={restaurant.id}
          >
            <div className="w-full py-8 px-4 bg-[#F0F0F0] space-y-4 flex flex-col">
              <span className="text-xl font-bold">{restaurant?.name}</span>
              <span>{restaurant.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
