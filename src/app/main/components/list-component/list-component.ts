import { BaseComponent } from "../base-component/base-component";
import { ComponentProps, IListable, IExpandable } from "../../../shared/models/types";

export abstract class ListComponent extends BaseComponent implements IListable, IExpandable {
  public state = {closed: true};
  constructor(props: ComponentProps) {
    const { tagName = 'ul' } = props;
    if(tagName !== 'ul' && tagName !== 'ol')  {
      throw new Error('targName value must be ul or ol');
    }
    props.tagName = tagName;
    super(props);
  }

  abstract getItems(list: {name: string; value: string; content: string}[]): void;

  public expand(value: boolean): void {
    if (value) {console.log('expand!')}
  }
}