import { BaseComponent } from "../../../main/components/base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";

import './page-content.scss';

export class PageContent extends BaseComponent {
  constructor(props: ComponentProps = {}) {
    props.tagName = 'main';
    props.classList = ['page-content'];
    super(props);
  }
}