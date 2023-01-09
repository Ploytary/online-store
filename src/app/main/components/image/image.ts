import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';

const noImage = require('../../../../assets/image/no-image.png');

export class Image extends BaseComponent {
  constructor(props: ComponentProps) {
    props.tagName = 'img';
    super(props);

    const { width = 200, height = 200, src = noImage, alt = '' } = props;
    if (this.node instanceof HTMLImageElement) {
      this.node.src = src;
      this.node.alt = alt;
      this.node.width = width;
      this.node.height = height;
    }
  }
}
