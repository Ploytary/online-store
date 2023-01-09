import { render, renderListPloytary, renderListmrdmitrij } from './app-render';
import { PageHeader } from '../../core/pages/page-header/page-header';
import { PageContent } from '../../core/pages/page-content/page-content';
import { PageFooter } from '../../core/pages/page-footer/page-footer';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { Catalog } from '../pages/catalog/catalog';

const ploytaryElems = render(renderListPloytary);
const mrdmitrijElems = render(renderListmrdmitrij);

const routes: { [propName: string]: { template: string | HTMLElement } } = {
  404: {
    template: new PageNotFound().node,
  },
  '/': {
    template: 'Тут воткнуть хиро, промо итд',
  },
  catalog: {
    template: new Catalog().node,
  },
  cart: {
    template: 'cart template',
  },
  productPage: {
    template: 'product page template',
  },
  modal: {
    template: 'modal template',
  },
  ploytary: {
    template: ploytaryElems,
  },
  mrdmitrij: {
    template: mrdmitrijElems,
  },
};

start();

function start() {
  const header = new PageHeader();
  const content = new PageContent();
  const footer = new PageFooter();
  document.body.append(header.node, content.node, footer.node);
}

const locationHandler = async () => {
  let location = window.location.hash.replace('#', '');
  if (location.length == 0 || location === 'home') {
    location = '/';
  }

  const route = routes[location] || routes['404'];
  const contentContainer: HTMLElement | null = document.querySelector('.page-content');
  if (!contentContainer) {
    throw new Error('cant find dev-container');
  }
  contentContainer.innerHTML = '';
  contentContainer.append(route.template);
};

window.addEventListener('hashchange', locationHandler);
locationHandler();
