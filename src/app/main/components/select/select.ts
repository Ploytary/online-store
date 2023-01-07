import { BaseComponent } from "../base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";

import './select.scss';

export class Select extends BaseComponent {

  constructor(props: ComponentProps = {}) {
    props.tagName = 'select';
    props.classList = ['select'];
    super(props);

    const {selectOptions = ['no-options']} = props;
    if (this.node instanceof HTMLSelectElement) {
      selectOptions.forEach((option) => {
        const optElement = document.createElement('option');
        optElement.value = option;
        optElement.textContent = option;
        this.node.append(optElement);
      });
    }
  }
}