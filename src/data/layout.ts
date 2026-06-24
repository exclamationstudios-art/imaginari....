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

  return {
    heroBanner: '/models/mixed-model.jpg',
    banner1: '/models/photo_2026-06-15_15-26-05.jpg',
    banner2: '/models/photo_2026-06-15_15-26-10.jpg',
    banner3: '/models/photo_2026-06-15_15-26-19.jpg',
    banner4: '/models/photo_2026-06-15_15-26-23.jpg',
    
    heroProducts: cloneProducts('hero'),
    banner1Products: cloneProducts('banner1'),
    banner2Products: cloneProducts('banner2'),
    banner3Products: cloneProducts('banner3'),
    banner4Products: cloneProducts('banner4'),
  };
};
