import { BaseComponent } from "../../components/base-component/base-component";
import { ComponentProps } from '../../../shared/models/types';
import { CatalogHeadline } from "../../components/catalog-headline/catalog-headline";
import { CatalogFilter } from "../../components/catalog-filter/catalog-filter";
import { ProductCardPreview } from "../../components/product-card-preview/product-card-preview";
import { Pagination } from "../../components/pagination/pagination";
import { data } from "../../project.moke";

import './catalog.scss';

const CARDS_COUNT = 6;

export class Catalog extends BaseComponent {

  constructor(props: ComponentProps = {}) {
    props.tagName = 'section';
    props.classList = ['catalog'];
    super(props);

    const container = new BaseComponent({tagName: 'div', classList: ['page-wrapper']});
    const titleComponent = new BaseComponent({tagName: 'h2', classList: ['catalog__title'], content: 'Catalog'});
    const sectionContent = new BaseComponent({tagName: 'div', classList: ['catalog__content']});
    container.node.append(titleComponent.node, sectionContent.node);

    const headlineComponent = new CatalogHeadline();
    const filterComponent = new CatalogFilter();
    const catalogLists = new BaseComponent({tagName: 'div', classList: ['catalog__lists']});
    const productCards = new BaseComponent({tagName: 'div', classList: ['catalog__product-cards']});
    const paginationCommponent = new Pagination(CARDS_COUNT);
    catalogLists.node.append(productCards.node, paginationCommponent.node);

    for (let i = 0; i < CARDS_COUNT; i++) {
      const productCardComponent = new ProductCardPreview(data.products[i]);
      productCards.node.append(productCardComponent.node);
    }

    sectionContent.node.append(headlineComponent.node, filterComponent.node, catalogLists.node);

    this.node.append(container.node);

  }
}