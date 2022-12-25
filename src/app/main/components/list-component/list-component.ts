import { BaseComponent } from "../base-component/base-component";
import { ComponentProps, IListable, IExpandable } from "../../../shared/models/types";

export class ListComponent extends BaseComponent {
  constructor(props: ComponentProps) {
    const { tagName = 'ul' } = props;
    if(tagName !== 'ul' && tagName !== 'ol')  {
      throw new Error('targName value must be ul or ol');
    }
    props.tagName = tagName;
    super(props);
  }
}