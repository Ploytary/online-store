import { BaseComponent } from "../../components/base-component/base-component";
import { ComponentProps } from '../../../shared/models/types';
import { Image } from "../../components/image/image";
import { SiteNavigation } from "../../components/site-naviation/site-navigation";
import { UserNavigation } from "../../components/user-navigation/user-navigation";

const logoImage = require('../../../../assets/logo/site-logo.svg');

import './page-header.scss';

export class PageHeader extends BaseComponent {
  constructor(props: ComponentProps = {}) {
    props.tagName = 'header';
    props.classList = ['page-header'];
    super(props);

    const container = new BaseComponent({tagName: 'div', classList: ['page-wrapper']});
    const sectionTitle = new BaseComponent({tagName: 'h1', content: 'Online store', classList: ['visually-hidden', 'page-header__title']});
    const logo = new Image({src: logoImage, classList: ['page-header__logo'], width: 192, height: 45});
    const siteNavigationComponent = new SiteNavigation();
    const userNavigationComponent = new UserNavigation();
    container.node.append(sectionTitle.node, logo.node, siteNavigationComponent.node, userNavigationComponent.node);
    this.node.append(container.node);
  }
}