import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { ListComponent } from '../list-component/list-component';
import { Link } from '../link/link';

import './site-navigation.scss';

export class SiteNavigation extends BaseComponent {
  constructor(props: ComponentProps = {}) {
    props.tagName = 'nav';
    props.classList = ['site-navigation'];
    super(props);

    const listComponent = new ListComponent({classList: ['site-navigation__list']});
    ['Home', 'Shop', 'Categories'].forEach((item) => {
      const liElementComponent = new BaseComponent({tagName: 'li', classList: ['site-navigation__item']});
      const link = new Link({classList: ['site-navigation__item'], content: item, id: item});
      liElementComponent.node.append(link.node);
      listComponent.node.append(liElementComponent.node);
    });
    this.node.append(listComponent.node);
  }
}