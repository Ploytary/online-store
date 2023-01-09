import './page-not-found.scss';
import { BaseComponent } from '../../components/base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { Button } from '../../components/button/button';

export class PageNotFound extends BaseComponent {
  private title: BaseComponent;
  private subtitle: BaseComponent;
  private button: Button;

  constructor(props: ComponentProps = {}) {
    props.tagName = 'section';
    props.classList = ['section-error'];
    super(props);
    this.title = new BaseComponent({
      tagName: 'h2',
      classList: ['section-error__title'],
      content: '404 ERROR',
    });
    this.subtitle = new BaseComponent({
      tagName: 'p',
      classList: ['section-error__subtitle'],
      content: 'This page not found Back to home and start again',
    });
    this.button = new Button({
      classList: ['section-error__button', 'button--accent'],
      content: 'To homepage',
    });
    this.node.append(this.title.node, this.subtitle.node, this.button.node);
  }
}
