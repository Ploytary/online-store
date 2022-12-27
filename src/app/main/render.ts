import { CheckBox } from './components/checkbox/checkbox';
import { BrandList } from './components/brand-list/brand-list';
import { CategoryList } from './components/category-list/category-list';
import { RangeSlider } from './components/range-slider/range-slider';
import { PriceRangeSlider } from './components/price-range-slider/price-range-slider';

export const renderListPloytary = [
  new BrandList(),
  new CategoryList(),
  new PriceRangeSlider(),
]
export const renderListmrdmitrij = [
  new CheckBox({name: 'просрал', value: 'всё', content: 'на свете', dataItemId: 'downgrade', classList: ['ппц']}),
]

export function render(elementList: object): HTMLElement {
  let el: HTMLElement = document.createElement('div');
  if (!Array.isArray(elementList)) {throw new Error('param is not array')};
  const nodes: HTMLElement[] = elementList.map((element) => element.node);
  nodes.forEach((node) => el.append(node));
  return el;
}

