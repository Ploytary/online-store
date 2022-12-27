export type ComponentProps = {
  tagName?: string;
  classList?: string[];
  content?: string;
  type?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  step?: string;
  [propName: string]: string | string[] | undefined | boolean;
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