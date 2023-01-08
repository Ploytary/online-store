import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { Link } from '../link/link';

export class IconLink extends Link {

  constructor(props: ComponentProps = {}) {
    const linkName = props.content;
    props.content = '';
    super(props);

    const {SVGIconID, width, height} = props;
    const linkNameComponent = new BaseComponent({tagName: 'span', content: linkName, classList: ['link__name', 'visually-hidden']});
    const svgElementString = `<svg width="${width}" height="${height}"><use xlink:href="#${SVGIconID}"></use></svg>`;
    this.node.append(linkNameComponent.node);
    this.node.insertAdjacentHTML('beforeend', svgElementString);
  }
}