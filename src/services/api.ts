import { Product } from '../types';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    
    // Transform the data to match our Product interface
    return data.map((item: any) => ({
      id: item.id,
      name: item.title,
      price: item.price,
      image: item.image,
      description: item.description
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};