import { BaseComponent } from "../base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";
import { Input } from "../input/input";
import { Select } from "../select/select";
import { IconButton } from "../icon-button/icon-button";

import './catalog-headline.scss';

export class CatalogHeadline extends BaseComponent {

  constructor(props: ComponentProps = {}) {
    props.tagName = 'div';
    props.classList = ['catalog__headline'];
    super(props);

    const searchInputComponent = new Input({classList: ['input--search', 'catalog__headline-input'], placeholder: 'Items 1-6 of 61'});

    const viewControlComponent = new BaseComponent({tagName: 'div', classList: ['catalog__view-control']});
    const sortComponent = new Select({selectOptions: ['Sort By: Position', 'Sort By: Name']});
    const showCountComponent = new Select({selectOptions: ['Show: 6 per page', 'Show: 12 per page', 'Show: 18 per page']});
    const tileButton = new IconButton({content: 'Tile', classList: ['icon-button--tile']});
    const listButton = new IconButton({content: 'List', classList: ['icon-button--list']});
    const buttonGroup = new BaseComponent({tagName: 'div', classList: ['catalog__headline-button-group']});
    buttonGroup.node.append(tileButton.node, listButton.node);
    viewControlComponent.node.append(sortComponent.node, showCountComponent.node);

    this.node.append(searchInputComponent.node, viewControlComponent.node, buttonGroup.node)
  }
}