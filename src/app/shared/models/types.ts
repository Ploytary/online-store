export type ComponentProps = {
  tagName?: string;
  classList?: string[];
  content?: string;
  type?: string;
  name?: string;
  value?: string;
  [propName: string]: string | string[] | undefined;
}


export interface IFunctionable {
  addListener(eventType: keyof HTMLElementEventMap, eventListener: EventListenerOrEventListenerObject): void;
}

export interface IListable {
  getItems(list: {name: string; value: string; content: string}[]): void
}

export interface IExpandable {
  expand(value: boolean): void;
}