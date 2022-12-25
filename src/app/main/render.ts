import { BrandList } from './components/brand-list/brand-list';
import { SubmitButton } from './components/button/submit-button';
import { CheckBox } from './components/checkbox/checkbox';

export const renderListPloytary = [
  new SubmitButton({content: 'как в реакте', classList: ['base-button'], dataSpecialDataId: 'megaID'}),
  new CheckBox({name: 'check1', value: 'checkvalue', content: 'шоколадница', dataItemId: 'custom-data'}),
  new BrandList({})
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

