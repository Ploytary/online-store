// import './icon-button.scss';
import { BaseComponent } from "../base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";

import './icon-button.scss';

export class IconButton extends BaseComponent {

  constructor(props: ComponentProps) {
    props.tagName = 'button';
    const buttonName = props.content;
    props.content = '';

    super(props);
    this.node.classList.add('icon-button')
    const { type = 'button'} = props;

    if(this.node instanceof HTMLButtonElement) {
      this.node.type = type;
    }

    const accessibilityButtonName = new BaseComponent({tagName: 'span', content: buttonName, classList: ['visually-hidden']})
    this.node.append(accessibilityButtonName.node);
  }
}