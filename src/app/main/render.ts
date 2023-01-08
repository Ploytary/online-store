import { BrandList } from './components/brand-list/brand-list';
import { CategoryList } from './components/category-list/category-list';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { PriceRangeSlider } from './components/price-range-slider/price-range-slider';
import { StockRangeSlider } from './components/stock-range-slider/stock-range-slider';
import { CatalogFilter } from './components/catalog-filter/catalog-filter';
import { CatalogHeadline } from './components/catalog-headline/catalog-headline';
import { ProductCardPreview } from './components/product-card-preview/product-card-preview';
import { Pagination } from './components/pagination/pagination';

const data1 = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ]
}

export const renderListPloytary = [
  new CatalogHeadline(),
  new ProductCardPreview(data1),
  new Pagination(6),
]
export const renderListmrdmitrij = [
  new PageNotFound({}),
]

export function render(elementList: object): HTMLElement {
  let el: HTMLElement = document.createElement('div');
  if (!Array.isArray(elementList)) {throw new Error('param is not array')};
  const nodes: HTMLElement[] = elementList.map((element) => element.node);
  nodes.forEach((node) => el.append(node));
  return el;
}

