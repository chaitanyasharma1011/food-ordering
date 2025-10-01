import { Choices } from "@/library/type";
import { v4 } from "uuid";

interface SidebarItem extends Choices {
  navigation: string;
}

export const menu: SidebarItem[] = [
  {
    id: v4(),
    option: "user",
    label: "Profile",
    navigation: "/profile/user",
  },
  {
    id: v4(),
    option: "orders",
    label: "Orders",
    navigation: "/profile/orders",
  },
  {
    id: v4(),
    option: "address",
    label: "Address",
    navigation: "/profile/address",
  },
];
