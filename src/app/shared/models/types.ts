export type ComponentProps = {
  tagName?: string;
  classList?: string[];
  content?: string;
  type?: string;
  name?: string;
  value?: string | number;
  disabled?: boolean;
  min?: string;
  max?: string;
  step?: string;
  placeholder?: string;
  selectOptions?: string[];
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  [propName: string]: string | string[] | undefined | boolean | number;
}


export interface IFunctionable {
  addListener(eventType: keyof HTMLElementEventMap, eventListener: EventListenerOrEventListenerObject): void;
}

export interface IListable {
  getItems(list: string[]): void
}

export interface IExpandable {
  expand(value: boolean): void;
}