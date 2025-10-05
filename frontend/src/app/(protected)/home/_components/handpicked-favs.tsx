"use client";

import globalTheme from "@/library/globalTheme";
import { Restaurant } from "@/library/type";
import { useFetchRestaurantsQuery } from "@/redux/slices/restaurant/restaurantApiSlice";
import { useToggleFavourites } from "@/redux/slices/user/userApiSlice";
import { userState } from "@/redux/slices/user/userSlice";
import React, { useEffect, useRef, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

const renderStatus = (open: boolean) => (
  <div
    className={`text-sm p-1 inline-block text-white rounded ${
      open ? "bg-secondary-200" : "bg-primary-200"
    } `}
  >
    {open ? "Open" : "Closed"}
  </div>
);

const Card = ({ restaurant }: { restaurant: Restaurant }) => {
  const { user = {} } = useSelector(userState);
  const { favourites = [] } = user;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [fav, setFav] = useState(favourites.includes(restaurant?.id));
  const [toggleFav, setToggleFav] = useToggleFavourites();

  const handleToggle = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setFav((prev: boolean) => !prev);
    timeoutRef.current = setTimeout(() => {
      toggleFav({ id: restaurant.id });
    }, 500);
  };

  useEffect(() => {
    const currentStatus = favourites.includes(restaurant?.id);
    if (currentStatus !== fav) setFav(currentStatus);
  }, [user]);

  return (
    <div
      className="w-full h-[400px] bg-cover relative rounded-2xl flex flex-col justify-end"
      style={{ backgroundImage: `url(${restaurant.images[0]})` }}
      key={restaurant.id}
    >
      <div className="w-full py-8 px-4 bg-[#F0F0F0] space-y-4 flex flex-col">
        <div className="w-full flex items-center justify-between">
          <span className="text-xl font-bold">{restaurant?.name}</span>
          <span onClick={handleToggle} className="cursor-pointer">
            {fav ? (
              <IoIosHeart
                color={globalTheme?.palette?.primary?.main}
                size={24}
              />
            ) : (
              <IoIosHeartEmpty size={24} />
            )}
          </span>
        </div>

        <span>{restaurant.description}</span>
      </div>
      <div className="absolute top-2 left-2">
        {renderStatus(restaurant?.open)}
      </div>
    </div>
  );
};

export default function Handpickedfavs() {
  const [fetchRestaurant, { data = { data: [] }, error }] =
    useFetchRestaurantsQuery();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  useEffect(() => {
    if (error) {
    }
  }, [data, error]);

  console.log(data?.data);

  return (
    <section className="pb-[96px] space-y-10 flex flex-col items-center">
      <h3 className="font-montserrat font-bold uppercase text-3xl">
        Handpicked Favourites
      </h3>
      <div className="grid grid-cols-3 gap-4 px-4 w-full">
        {(data?.data || []).map((restaurant: Restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}
