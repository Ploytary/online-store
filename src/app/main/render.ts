import { CheckBox } from './components/checkbox/checkbox';
import { BrandList } from './components/brand-list/brand-list';

export const renderListPloytary = [
  new CheckBox({name: 'check1', value: 'checkvalue', content: 'шоколадница', dataItemId: 'custom-data'}),
  new BrandList(),
]
export const renderListmrdmitrij = [
  new CheckBox({name: 'просрал', value: 'всё', content: 'на свете', dataItemId: 'downgrade'}),
]

export function render(elementList: object): HTMLElement {
  let el: HTMLElement = document.createElement('div');
  if (!Array.isArray(elementList)) {throw new Error('param is not array')};
  const nodes: HTMLElement[] = elementList.map((element) => element.node);
  nodes.forEach((node) => el.append(node));
  return el;
}

