import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { Button } from '../button/button';
import { CategoryList } from '../category-list/category-list';
import { BrandList } from '../brand-list/brand-list';
import { PriceRangeSlider } from '../price-range-slider/price-range-slider';
import { StockRangeSlider } from '../stock-range-slider/stock-range-slider';
import '../list-section/list-section';

import './catalog-filter.scss';

export class CatalogFilter extends BaseComponent {
  constructor(props: ComponentProps = {}) {
    props.tagName = 'form';
    props.classList = ['catalog__filter'];
    super(props);

    //шапка
    const headLineComponent = new BaseComponent({ tagName: 'div', classList: ['catalog__filter-headline'] });
    const titleComponent = new BaseComponent({
      tagName: 'h3',
      classList: ['catalog__filter-title'],
      content: 'Filters',
    });
    const resetLinkComponent = new BaseComponent({
      tagName: 'a',
      classList: ['catalog__filter-reset-link', 'link'],
      content: 'Reset',
    });
    headLineComponent.node.append(titleComponent.node, resetLinkComponent.node);

    //списки
    const categoryListComponent = new CategoryList();
    const brandListComponent = new BrandList();

    //слайдеры
    const priceSliderComponent = new PriceRangeSlider();
    const stockSliderComponent = new StockRangeSlider();

    //кнопки
    const formControls = new BaseComponent({ tagName: 'div', classList: ['catalog__filter-controls'] });
    const resetButtonComponent = new Button({ classList: ['catalog__filter-reset-button'], content: 'Reset filters' });
    const copyButtonComponent = new Button({ classList: ['catalog__filter-copy-button'], content: 'Copy filters' });
    formControls.node.append(resetButtonComponent.node, copyButtonComponent.node);

    //контент
    const formContent = new BaseComponent({ tagName: 'div', classList: ['catalog__filter-content'] });
    formContent.node.append(
      categoryListComponent.node,
      brandListComponent.node,
      priceSliderComponent.node,
      stockSliderComponent.node
    );

    //форма
    this.node.append(headLineComponent.node, formContent.node, formControls.node);
  }
}
