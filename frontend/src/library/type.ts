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

// private UUID id;
// private String address;
// private String city;
// private String state;
// private String landmark;
// private String pincode;
