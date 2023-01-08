import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Catalog } from './pages/catalog/catalog';
import { PageHeader } from './pages/page-header/page-header';

export const renderListPloytary = [
  new PageHeader(),
  new Catalog(),
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

