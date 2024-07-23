export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
  statusProd: string;
};

export type KursiType = {
  id: string;
  createdAt: Date;
  title: string;
  lantai: string;
  statusKursi: string;
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  statusOrder: string;
  createdAt: Date;
  intent_id?: String;
};

export type BookingType = {
  id:      string;
  createdAt: Date; 
  kursis:  KursiType[];
  tanggalWaktu: Date;
  durasi:  number;
  statusBooking:  string;
  intent_id?: string;
  userEmail: string;
}

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart: (item: CartItemType) => void;
  removeFromCart: (item: CartItemType) => void;
};
