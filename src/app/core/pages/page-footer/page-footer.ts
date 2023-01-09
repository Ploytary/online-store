import { BaseComponent } from '../../../main/components/base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { IconLink } from '../../../main/components/icon-link/icon-link';
import { ListComponent } from '../../../main/components/list-component/list-component';
import { Socials } from '../../../main/components/socials/socials';

import './page-footer.scss';
import { Link } from '../../../main/components/link/link';

export class PageFooter extends BaseComponent {
  constructor(props: ComponentProps = {}) {
    props.tagName = 'footer';
    props.classList = ['page-footer'];
    super(props);

    ///////////////////bottom
    const pageFooterBottom = new BaseComponent({ tagName: 'div', classList: ['page-footer__bottom'] });
    //authors
    const authors = new BaseComponent({ tagName: 'p', classList: ['page-footer__autors'], content: 'Made by ' });
    const githubPloytaryIcon = new IconLink({
      width: 32,
      height: 32,
      SVGIconID: 'github-icon',
      href: 'https://github.com/Ploytary',
      content: 'Ploytary github',
    });
    const githubMrdmitrijIcon = new IconLink({
      width: 32,
      height: 32,
      SVGIconID: 'github-icon',
      href: 'https://github.com/mrdmitrij',
      content: 'mrdmitrij github',
    });
    const ploytaryBarge = new BaseComponent({
      tagName: 'span',
      classList: ['page-footer__autors-barge'],
      content: '@Ploytary',
    });
    const mrdmitrijBarge = new BaseComponent({
      tagName: 'span',
      classList: ['page-footer__autors-barge'],
      content: '@mrdmitrij',
    });
    ploytaryBarge.node.prepend(githubPloytaryIcon.node);
    mrdmitrijBarge.node.prepend(githubMrdmitrijIcon.node);
    authors.node.append(ploytaryBarge.node, mrdmitrijBarge.node);

    //rs-school
    const rsSchool = new BaseComponent({ tagName: 'p', classList: ['page-footer__school'], content: 'Powered by ' });
    const schoolIcon = new IconLink({
      width: 93,
      height: 30,
      SVGIconID: 'rs-school-icon',
      href: 'https://rs.school/',
      content: 'RS-School',
    });
    const schoolBarge = new BaseComponent({
      tagName: 'span',
      classList: ['page-footer__school-barge'],
      content: 'RS School',
    });
    schoolBarge.node.prepend(schoolIcon.node);
    rsSchool.node.append(schoolBarge.node);

    //year
    const year = new BaseComponent({ tagName: 'p', classList: ['page-footer__year'], content: '2022 - 2023' });

    pageFooterBottom.node.append(authors.node, rsSchool.node, year.node);

    //////////////top
    const pageFooterTop = new BaseComponent({ tagName: 'div', classList: ['page-footer__top'] });
    //left column
    const leftColumn = new BaseComponent({ tagName: 'div', classList: ['page-footer__column-left'] });
    const logo = new IconLink({
      width: 192,
      height: 45,
      SVGIconID: 'site-logo',
      href: '#home',
      content: 'Site logo',
      classList: ['page-footer__logo'],
    });
    const socials = new Socials();
    leftColumn.node.append(logo.node, socials.node);

    //center column
    const centerColumn = new BaseComponent({ tagName: 'div', classList: ['page-footer__column-center'] });
    const centerColumnTitle = new BaseComponent({
      tagName: 'h3',
      classList: ['page-footer__menu-list-title'],
      content: 'Menu',
    });
    const menuList = new ListComponent({ classList: ['page-footer__menu-list'] });
    ['Home', 'Catalog', 'Cart'].forEach((item) => {
      const liComponent = new BaseComponent({ tagName: 'li', classList: ['page-footer__menu-item'] });
      const linkComponent = new Link({
        content: item,
        href: '#' + item.toLowerCase(),
        classList: ['page-footer__menu-link'],
      });
      liComponent.node.append(linkComponent.node);
      menuList.node.append(liComponent.node);
    });
    centerColumn.node.append(centerColumnTitle.node, menuList.node);

    //right column
    const rightColumn = new BaseComponent({ tagName: 'div', classList: ['page-footer__column-right'] });
    const rightColumnTitle = new BaseComponent({
      tagName: 'h3',
      classList: ['page-footer__menu-list-title'],
      content: 'Contacts',
    });
    const email = new BaseComponent({
      tagName: 'p',
      classList: ['page-footer__contacts-item'],
      content: 'Agustina.Jakubowski63@hotmail.com',
    });
    const phone = new BaseComponent({
      tagName: 'p',
      classList: ['page-footer__contacts-item'],
      content: '(514) 243-189176',
    });
    const address = new BaseComponent({
      tagName: 'p',
      classList: ['page-footer__contacts-item'],
      content: '16032 Tromp Overpas, Charlotte, Idaho, 65644-2998',
    });
    rightColumn.node.append(rightColumnTitle.node, email.node, phone.node, address.node);

    pageFooterTop.node.append(leftColumn.node, centerColumn.node, rightColumn.node);

    const container = new BaseComponent({ tagName: 'div', classList: ['page-wrapper'] });
    container.node.append(pageFooterTop.node, pageFooterBottom.node);
    this.node.append(container.node);
  }
}
