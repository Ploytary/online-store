import './button.scss';
import { BaseComponent } from "../base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";

export class Button extends BaseComponent {

  constructor(props: ComponentProps) {
    props.tagName = 'button';
    props.classList?.push('button');
    super(props);
    const { type = 'button'} = props;

    if(this.node instanceof HTMLButtonElement) {
      this.node.type = type;
    }
  }

  // abstract addListener(eventType: keyof HTMLElementEventMap, eventListener: EventListenerOrEventListenerObject): void;
}