const fs = require('fs');

const data = fs.readFileSync('src/data.ts', 'utf-8');

const brandsMatch = data.match(/export const BRANDS: Brand\[\] = \[([\s\S]*?)\];\n/);
const productsMatch = data.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];\n/);
const articlesMatch = data.match(/export const ARTICLES: Article\[\] = \[([\s\S]*?)\];\n/);
const categoriesMatch = data.match(/export const CATEGORIES = \[([\s\S]*?)\];/);
const gendersMatch = data.match(/export const GENDERS = \[([\s\S]*?)\];/);
const playlistMatch = data.match(/export const PLAYLIST = \{([\s\S]*?)\};/);
const instaMatch = data.match(/export const INSTAGRAM_POSTS = \[([\s\S]*?)\];/);
const layoutMatch = data.match(/export const getDefaultCustomLayout = \(\): CustomLayout => \{([\s\S]*?)\};/);

fs.writeFileSync('src/data/brands.ts', `import { Brand } from '../types';\n\nexport const BRANDS: Brand[] = [${brandsMatch[1]}];\n`);
fs.writeFileSync('src/data/products.ts', `import { Product } from '../types';\n\nexport const PRODUCTS: Product[] = [${productsMatch[1]}];\n`);
fs.writeFileSync('src/data/articles.ts', `import { Article } from '../types';\n\nexport const ARTICLES: Article[] = [${articlesMatch[1]}];\n`);

fs.writeFileSync('src/data/constants.ts', `
export const CATEGORIES = [${categoriesMatch[1]}];\n
export const GENDERS = [${gendersMatch[1]}];\n
export const PLAYLIST = {${playlistMatch[1]}};\n
export const INSTAGRAM_POSTS = [${instaMatch[1]}];\n
`);

fs.writeFileSync('src/data/layout.ts', `import { CustomLayout, Product } from '../types';
import { PRODUCTS } from './products';

export const getDefaultCustomLayout = (): CustomLayout => {${layoutMatch[1]}};
`);

fs.writeFileSync('src/data.ts', `export * from './data/brands';
export * from './data/products';
export * from './data/articles';
export * from './data/constants';
export * from './data/layout';
`);

console.log("Done splitting data.ts");
