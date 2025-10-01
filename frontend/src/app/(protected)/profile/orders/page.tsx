import { Order } from "@/library/type";
import React from "react";
import { v4 } from "uuid";

export default function Orders() {
  const orders: Order[] = [
    {
      id: v4(),
      amount: 1000,
      restaurant: "Kanha",
      status: "PENDING",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center space-y-6 p-4">
      <h2 className="text-center font-semibold text-white text-xl">
        My Orders
      </h2>
      <div className="flex flex-col space-y-4 w-1/2">
        {orders.map((order) => (
          <div
            className="flex justify-between items-center p-4 space-x-4 rounded-md bg-black w-full"
            key={order?.id}
          >
            <div className="space-y-1">
              <p className="text-white">{order?.restaurant}</p>
              <p className="text-white">{`₹ ${order?.amount}`}</p>
            </div>
            <div className="uppercase text-white">{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
