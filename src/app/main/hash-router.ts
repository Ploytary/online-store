import { render, renderListPloytary, renderListmrdmitrij } from './render';

const ploytaryElems = render(renderListPloytary);
const mrdmitrijElems = render(renderListmrdmitrij);

const routes: { [propName: string]: { template: string | HTMLElement } } = {
  404: {
    template: 'page not found',
  },
  '/': {
    template: 'home template',
  },
  catalog: {
    template: 'catalog template',
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

const locationHandler = async () => {
  let location = window.location.hash.replace('#', '');
  if (location.length == 0) {
    location = '/';
  }

  const route = routes[location] || routes['404'];
  const CONTENT_CONRAINER = '.dev-container';
  const contentContainer: HTMLElement | null = document.querySelector(CONTENT_CONRAINER);
  if (!contentContainer) {
    throw new Error('cant find dev-container');
  }
  contentContainer.innerHTML = '';
  contentContainer.append(route.template);
};

window.addEventListener('hashchange', locationHandler);
locationHandler();
