import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Catalog } from './pages/catalog/catalog';
import { PageHeader } from '../core/pages/page-header/page-header';
import { PageFooter } from '../core/pages/page-footer/page-footer';

export const renderListPloytary = [new PageHeader(), new Catalog(), new PageFooter()];
export const renderListmrdmitrij = [new PageNotFound({})];

export function render(elementList: object): HTMLElement {
  const el: HTMLElement = document.createElement('div');
  if (!Array.isArray(elementList)) {
    throw new Error('param is not array');
  }
  const nodes: HTMLElement[] = elementList.map((element) => element.node);
  nodes.forEach((node) => el.append(node));
  return el;
}
