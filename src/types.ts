export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  imageUrls?: string[];
  category: 'T-Shirt' | 'Hoodie' | 'Accessories' | 'vintage T-Shirt' | 'Dry T-Shirt' | 'Long Sleeve' | 'Cap';
  sizes: string[];
  soldOutSizes?: string[];
  isSoldOut?: boolean;
  series: 'TEAM ZONO' | 'GOAT apparel' | 'notorious qupid';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}
