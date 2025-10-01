export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
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
