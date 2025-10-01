"use client";

import { Address } from "@/library/type";
import { v4 } from "uuid";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { Button } from "@mui/material";
import Modal from "@/components/modal";
import { useState } from "react";
import Card from "@/components/cards/address";
import NewAddress from "@/components/layouts/address/new-address";

export default function Addresses() {
  const addresses: Address[] = [
    {
      id: v4(),
      address: "212, Sai Vihar Colony",
      city: "Ujjain",
      pincode: 456331,
      state: "MP",
    },
    {
      id: v4(),
      address: "212, Sai Vihar Colony",
      city: "Ujjain",
      pincode: 456331,
      state: "MP",
    },
    {
      id: v4(),
      address: "212, Sai Vihar Colony",
      city: "Ujjain",
      pincode: 456331,
      state: "MP",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col items-center space-y-6 p-4">
      <h2 className="text-center font-semibold text-white text-xl">
        Your addresses
      </h2>
      <div className="w-full grid grid-cols-4 gap-6 mt-8">
        {addresses.map((address) => (
          <Card address={address} choice={false} key={address?.id} />
        ))}
      </div>
      <div className="bg-[#1E1E1E] shadow-[rgba(255,255,255,0.08)] shadow-sm p-4 space-x-4 inline-flex mt-8 mx-auto">
        <MdOutlineAddLocationAlt size={24} className="text-white" />
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold">Add New Address</h3>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => setOpen(true)}
          >
            Add
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <NewAddress />
      </Modal>
    </div>
  );
}
