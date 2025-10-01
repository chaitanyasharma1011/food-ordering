import React from "react";
import { CartItem } from "./data";
import { v4 } from "uuid";
import Item from "./cart-item";

interface Breakdownitem {
  id: string;
  label: string;
  value: number;
}

export default function Sidebar() {
  const items: CartItem[] = [
    {
      id: v4(),
      img: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
      name: "Burger",
      quantity: 5,
      price: 200,
      ingredients: [
        {
          id: v4(),
          name: "sauce",
        },
      ],
    },
    {
      id: v4(),
      img: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
      name: "Burger",
      quantity: 5,
      price: 200,
      ingredients: [
        {
          id: v4(),
          name: "sauce",
        },
      ],
    },
  ];

  const breakdownItem: Breakdownitem[] = [
    {
      id: v4(),
      label: "Item Total",
      value: 2000,
    },
    {
      id: v4(),
      label: "Delivery Fee",
      value: 21,
    },
    {
      id: v4(),
      label: "Platform Fee",
      value: 21,
    },
    {
      id: v4(),
      label: "GST and Restaurant Charges",
      value: 33,
    },
    {
      id: v4(),
      label: "Total Pay",
      value: 3366,
    },
  ];
  return (
    <div className="border bg-[#1E1E1E] border-white/40 w-[400px] h-full pb-4 rounded-2xl">
      <div className="border-b border-b-white/40">
        {items.map((item) => (
          <Item item={item} key={item?.id} />
        ))}
      </div>
      <div className="space-y-4 pt-8 px-4">
        <p className="text-white">Bill Details</p>
        {breakdownItem.map((item) => (
          <div className="flex w-full justify-between" key={item?.id}>
            <p className="text-sm text-[#c6c6c6dd]">{item?.label}</p>
            <p className="text-sm text-[#c6c6c6dd]">{`₹ ${item.value}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
