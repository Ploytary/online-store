import './checkbox.scss';
import { BaseComponent } from "../base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";

export class CheckBox extends BaseComponent {

  constructor(props: ComponentProps) {
    props.tagName = 'label';
    super(props);
    const {name, value, content} = props;
    if (!(name && value && content)) {
      throw new Error('must enter name, value, content properties');
    };
    const html = `
    <input class="checkbox__input visually-hidden" type="checkbox" name="${name}" value="${value}">
      <svg class="checkbox__input-icon-check-off" height="24" width="24" aria-hidden="true"><use xlink:href="#check-off"></use></svg>
      <svg class="checkbox__input-icon-check-on" height="24" width="24" aria-hidden="true"><use xlink:href="#check-on"></use></svg>
    <span class="checkbox__label">${content}</span>`;
    this.node.innerHTML = html;
    this.node.classList.add('checkbox');
  }
}