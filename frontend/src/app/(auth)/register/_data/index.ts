import { Choices } from "@/library/type";
import { v4 } from "uuid";

export const roles: Choices[] = [
  {
    id: v4(),
    option: "CUSTOMER",
    label: "Customer",
  },
  {
    id: v4(),
    option: "RESTAURANT",
    label: "Restaurant",
  },
];
