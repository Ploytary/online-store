import './checkbox.scss';
import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';

export class CheckBox extends BaseComponent {
  state = { disabled: false };

  constructor(props: ComponentProps) {
    props.tagName = 'label';
    props.classList = ['checkbox'];
    super(props);

    const { name, value, content } = props;
    if (!(name && value && content)) {
      throw new Error('must enter name, value, content properties');
    }

    const html = `
    <input class="checkbox__input visually-hidden" type="checkbox" name="${name}" value="${value}">
      <svg class="checkbox__input-icon-check-off" height="24" width="24" aria-hidden="true"><use xlink:href="#check-off"></use></svg>
      <svg class="checkbox__input-icon-check-on" height="24" width="24" aria-hidden="true"><use xlink:href="#check-on"></use></svg>
    <span class="checkbox__label">${content}</span>`;
    this.node.innerHTML = html;

    const { disabled } = props;
    if (disabled) {
      this.state.disabled = disabled;
    }
    const checkboxInput = this.node.querySelector('.checkbox__input');
    if (checkboxInput instanceof HTMLInputElement) {
      checkboxInput.disabled = this.state.disabled;
    }
    this.node.classList.toggle('checkbox--disabled', this.state.disabled);
  }
}
