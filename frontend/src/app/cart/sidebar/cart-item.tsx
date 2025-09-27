import React from "react";
import { CartItem } from "./data";
import Image from "next/image";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import globalTheme from "@/library/globalTheme";

export default function Item({ item }: { item: CartItem }) {
  return (
    <div className="w-full flex flex-col space-y-4 p-4">
      <div className="flex space-x-4 items-center">
        <Image
          src={item?.img}
          alt={item.name}
          width={200}
          height={200}
          className="w-[100px] h-[100px] "
        />
        <div className="flex flex-col space-y-4 flex-1">
          <p className="text-white">{item.name}</p>
          <div className="flex items-center space-x-4">
            <FiMinusCircle
              style={{ color: globalTheme.palette.primary.main }}
            />
            <span className=" text-white">{item?.quantity}</span>
            <FiPlusCircle style={{ color: globalTheme.palette.primary.main }} />
          </div>
        </div>
        <p className="text-white">{item.price * item?.quantity}</p>
      </div>
      <div className="flex space-x-2 flex-wrap w-full">
        {item.ingredients.map((ingredient) => (
          <div
            className="py-1 px-2 bg-[#EDEDED] rounded-lg"
            key={ingredient?.id}
          >
            {ingredient.name}
          </div>
        ))}
      </div>
    </div>
  );
}
