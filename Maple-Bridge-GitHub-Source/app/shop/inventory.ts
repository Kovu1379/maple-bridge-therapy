export type Product = {
  id: string;
  name: string;
  category: 'Handwriting tools' | 'Worksheets & downloads';
  description: string;
  image: string;
  imageAlt: string;
  price: number;
  currency: string;
  availability: 'In stock' | 'Out of stock' | 'Coming soon';
};

// Add confirmed products here. Keep private supplier/cost data outside the public catalogue.
export const products: Product[] = [];
