import { BaseComponent } from "../../components/base-component/base-component";
import { ComponentProps } from '../../../shared/models/types';
import { IconLink } from "../../components/icon-link/icon-link";
import { SiteNavigation } from "../../components/site-naviation/site-navigation";
import { UserNavigation } from "../../components/user-navigation/user-navigation";

import './page-header.scss';

export class PageHeader extends BaseComponent {
  constructor(props: ComponentProps = {}) {
    props.tagName = 'header';
    props.classList = ['page-header'];
    super(props);

    const container = new BaseComponent({tagName: 'div', classList: ['page-wrapper']});
    const sectionTitle = new BaseComponent({tagName: 'h1', content: 'Online store', classList: ['visually-hidden', 'page-header__title']});
    const logo = new IconLink({width: 192, height: 45, SVGIconID: 'site-logo', href: '#home', content: 'Site logo', classList: ['page-header__logo']});
    const siteNavigationComponent = new SiteNavigation();
    const userNavigationComponent = new UserNavigation();
    container.node.append(sectionTitle.node, logo.node, siteNavigationComponent.node, userNavigationComponent.node);
    this.node.append(container.node);
  }
}