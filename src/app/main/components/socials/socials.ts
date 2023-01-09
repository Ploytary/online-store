import { BaseComponent } from "../../components/base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";
import { ListComponent } from "../../components/list-component/list-component";
import { IconLink } from "../icon-link/icon-link";

import './socials.scss';

export class Socials extends ListComponent {

  constructor(props: ComponentProps = {}) {
    props.classList = ['socials'];
    super(props);

    const twitterIcon = new IconLink({width: 32, height: 32, SVGIconID: 'twitter', href: 'https://twitter.com/', content: 'Twitter'});
    const instagramIcon = new IconLink({width: 32, height: 32, SVGIconID: 'instagram', href: 'https://www.instagram.com/', content: 'Instagram'});
    const facebookIcon = new IconLink({width: 32, height: 32, SVGIconID: 'facebook', href: 'https://facebook.com/', content: 'Facebook'});

    [twitterIcon, instagramIcon, facebookIcon].forEach((icon) => {
      const liComponent = new BaseComponent({tagName: 'li', classList: ['socials__item']});
      liComponent.node.append(icon.node);
      this.node.append(liComponent.node);
    });
  }
}