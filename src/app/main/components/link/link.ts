import { ComponentProps } from '../../../shared/models/types';
import { BaseComponent } from '../base-component/base-component';

import './link.scss';

export class Link extends BaseComponent {
  constructor(props: ComponentProps) {
    props.tagName = 'a';
    super(props);

    this.node.classList.add('link');
    const { href } = props;
    if (this.node instanceof HTMLAnchorElement) {
      if (href) {
        this.node.href = href;
      }
    }
  }
}
