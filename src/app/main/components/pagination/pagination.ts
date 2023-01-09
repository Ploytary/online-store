import { ComponentProps } from '../../../shared/models/types';
import { BaseComponent } from '../base-component/base-component';
import { data } from '../../project.moke';
import { Button } from '../button/button';

import './pagination.scss';

const PAGINATION_MAX_BUTTONS = 10;

export class Pagination extends BaseComponent {
  private pageCount: number;
  public itemsPerPage: number;

  constructor(itemsPerPage: number, props: ComponentProps = {}) {
    props.tagName = 'ul';
    super(props);

    this.node.classList.add('pagination');
    this.itemsPerPage = itemsPerPage;
    this.pageCount = Math.ceil(data.products.length / this.itemsPerPage);

    const liPrevButtonElement = document.createElement('li');
    liPrevButtonElement.className = 'pagination__item--prev';
    const prevButton = new Button({ content: '<', classList: ['button--pagination'] });
    liPrevButtonElement.append(prevButton.node);
    this.node.append(liPrevButtonElement);
    let i = 1;
    while (i <= this.pageCount) {
      if (i < PAGINATION_MAX_BUTTONS - 2 - 1) {
        const liEelement = document.createElement('li');
        liEelement.className = 'pagination__item';
        const paginationButton = new Button({
          content: i.toString(),
          classList: ['button--pagination'],
          id: i.toString(),
        });
        liEelement.append(paginationButton.node);
        this.node.append(liEelement);
      }
      if (i === PAGINATION_MAX_BUTTONS - 2 - 1) {
        const liEelement = document.createElement('li');
        liEelement.className = 'pagination__item';
        const paginationButton = new Button({ content: '...', classList: ['button--pagination'] });
        liEelement.append(paginationButton.node);
        this.node.append(liEelement);
      }
      if (i === PAGINATION_MAX_BUTTONS - 2) {
        i = this.pageCount;
        const liEelement = document.createElement('li');
        liEelement.className = 'pagination__item';
        const paginationButton = new Button({
          content: i.toString(),
          classList: ['button--pagination'],
          id: i.toString(),
        });
        liEelement.append(paginationButton.node);
        this.node.append(liEelement);
      }
      i++;
    }
    const liNextButtonElement = document.createElement('li');
    liNextButtonElement.className = 'pagination__item--next';
    const nextButton = new Button({ content: '>', classList: ['button--pagination'] });
    liNextButtonElement.append(nextButton.node);
    this.node.append(liNextButtonElement);
  }
}
