import './page-not-found.scss';
import { BaseComponent } from "../components/base-component/base-component";
import { ComponentProps } from "../../shared/models/types";

export class PageNotFound extends BaseComponent {
  private title: BaseComponent;
  private subtitle: BaseComponent;

  constructor(props: ComponentProps) {
    props.tagName = 'section';
    props.classList = ['section-error']
    super(props);
    this.title = new BaseComponent({
      tagName: 'h2',
      classList: ['section-error__title'],
      content: '404 ERROR'
    });
    this.subtitle = new BaseComponent({
      tagName: 'p',
      classList: ['section-error__subtitle'],
      content: 'This page not found Back to home and start again'
    });
    this.node.append(this.title.node, this.subtitle.node);
  }
}