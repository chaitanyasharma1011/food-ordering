import store from "@/redux/store";

export type roles = "ROLE_CUSTOMER" | "ROLE_RESTAURANT_OWNER";

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: roles;
  favourites: Record<string, string>[];
  addresses: Address[];
  cart: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  images: string[];
  open: boolean;
}

export interface Choices {
  id: string;
  option: string;
  label: string;
}

export interface Address {
  id: string;
  address: string;
  city: string;
  state: string;
  landmark?: string;
  pincode: number;
}

export interface Order {
  id: string;
  status: string;
  amount: number;
  restaurant: string;
}

export interface ApiResponse {
  success: boolean;
  data: Record<string, any> | null;
  status: number;
  message: string;
}

export type ReduxStoreType = ReturnType<typeof store.getState>;

// @Id
//     @GeneratedValue(strategy = GenerationType.UUID)
//     private UUID id;

//     @ManyToOne
//     private Users customer;

//     @JsonIgnore
//     @ManyToOne
//     private Restaurant restaurant;

//     private Long totalAmount;

//     private String orderStatus;

//     private Date createdAt;

//     @ManyToOne
//     private Address deliveryAddress;

//     @OneToMany
//     private List<OrderItem> items;

//     private int totalItem;

//     private int totalPrice;
