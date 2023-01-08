import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { ListComponent } from '../list-component/list-component';
import { IconLink } from '../icon-link/icon-link';

import './user-navigation.scss';

export class UserNavigation extends ListComponent {

  constructor(props: ComponentProps = {}) {
    props.classList = ['user-navigation'];
    super(props);

    const liSearchELement = new BaseComponent({tagName: 'li', classList: ['user-navigation__item']});
    const iconSearchLink = new IconLink({SVGIconID: 'search-icon', classList: ['search-link'], content: 'Search', width: 24, height: 24});
    liSearchELement.node.append(iconSearchLink.node);

    const liCartELement = new BaseComponent({tagName: 'li', classList: ['user-navigation__item']});
    const iconCartLink = new IconLink({SVGIconID: 'cart-icon', classList: ['cart-link'], content: 'Cart', width: 24, height: 24, href: '#cart'});
    liCartELement.node.append(iconCartLink.node);

    this.node.append(liSearchELement.node, liCartELement.node);
  }
}