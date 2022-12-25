import { BaseComponent } from "../base-component/base-component";
import { ComponentProps, IFunctionable } from "../../../shared/models/types";

export abstract class Button extends BaseComponent implements IFunctionable {

  constructor(props: ComponentProps) {
    props.tagName = 'button';
    super(props);
    const { type = 'button'} = props;

    if(this.node instanceof HTMLButtonElement) {
      this.node.type = type;
    }
  }

  abstract addListener(eventType: keyof HTMLElementEventMap, eventListener: EventListenerOrEventListenerObject): void;
}