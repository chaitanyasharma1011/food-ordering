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
