import { Choices } from "@/library/type";
import { v4 } from "uuid";

export const roles: Choices[] = [
  {
    id: v4(),
    option: "ROLE_CUSTOMER",
    label: "Customer",
  },
  {
    id: v4(),
    option: "ROLE_RESTAURANT_OWNER",
    label: "Restaurant",
  },
];
