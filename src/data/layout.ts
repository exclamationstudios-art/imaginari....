import { CustomLayout, Product } from '../types';
import { PRODUCTS } from './products';

export const getDefaultCustomLayout = (): CustomLayout => {
  const cloneProducts = (prefix: string): Product[] => {
    return PRODUCTS.map((p, idx) => ({
      ...p,
      id: `${prefix}_prod_${idx + 1}`,
      name: `${p.name}`,
    }));
  };
