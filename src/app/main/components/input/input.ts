import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';

import './input.scss';

export class Input extends BaseComponent {
  constructor(props: ComponentProps) {
    props.tagName = 'input';
    super(props);

    const { type = 'text', value, min = '0', max = '10000', step = '1', placeholder } = props;
    const classList = ['input'];
    this.node.classList.add(...classList);
    if (this.node instanceof HTMLInputElement) {
      this.node.type = type;
      if (value) {
        if (typeof value === 'number') {
          this.node.value = value.toString();
        } else {
          this.node.value = value;
        }
      }
      if (placeholder) {
        this.node.placeholder = placeholder;
      }
      if (this.node.type === 'range') {
        this.node.min = min;
        this.node.max = max;
        this.node.step = step;
      }
    }
  }
}
