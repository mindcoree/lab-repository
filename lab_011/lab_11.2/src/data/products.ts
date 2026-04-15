export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  { id: '1', name: 'Wireless Headphones', description: 'High-quality Bluetooth headphones', price: 199.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Smart Watch', description: 'Fitness tracker with heart rate monitor', price: 299.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Running Shoes', description: 'Lightweight running shoes', price: 129.99, category: 'Sports', image: 'https://via.placeholder.com/150' },
];
