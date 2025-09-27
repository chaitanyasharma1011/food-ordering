import { Address } from "@/library/type";
import { Button } from "@mui/material";
import { IoHomeSharp } from "react-icons/io5";

export default function Card({ address }: { address: Address }) {
  return (
    <div className="w-full shadow-[rgba(255,255,255,0.08)] shadow-sm flex p-4 space-x-4 rounded-lg bg-[#1E1E1E]">
      <IoHomeSharp size={24} className="text-white" />
      <div className="space-y-4">
        <h3 className="text-white text-xl font-semibold">Home</h3>
        <div className="space-y-1">
          <p className="text-[#A0A0A0]">{address?.address}</p>
          <p className="text-[#A0A0A0]">{address?.landmark}</p>
          <p className="text-[#A0A0A0]">{address?.pincode}</p>
          <p className="text-[#A0A0A0]">
            {address?.city + " , " + address.state}
          </p>
        </div>
        <Button color="primary" variant="outlined" fullWidth>
          SELECT
        </Button>
      </div>
    </div>
  );
}
