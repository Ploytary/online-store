import { CheckBox } from './components/checkbox/checkbox';
import { BrandList } from './components/brand-list/brand-list';
import { CategoryList } from './components/category-list/category-list';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { RangeSlider } from './components/range-slider/range-slider';
import { PriceRangeSlider } from './components/price-range-slider/price-range-slider';

export const renderListPloytary = [
  new BrandList(),
  new CategoryList(),
  new PriceRangeSlider(),
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

