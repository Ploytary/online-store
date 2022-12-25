import { ComponentProps } from "../../../shared/models/types";

export abstract class BaseComponent {
  public node: HTMLElement;

  constructor(props: ComponentProps) {
    const {tagName = 'div', classList = [], content = ''} = props;
    const el = document.createElement(tagName);
    
    el.classList.add(...classList);
    el.textContent = content;
    this.node = el;

    if(props) {
      for (let key of Object.keys(props)) {
        let customAtts = key.match(/^data([A-Z]\w+)$/);
        if (customAtts) {
          let customAttName = customAtts[0].slice('data'.length);
          customAttName = customAttName[0].toLowerCase() + customAttName.slice(1);
          const customAttValue = props[key];
          if (typeof customAttValue === 'string') {
            this.node.dataset[customAttName] = customAttValue;
          }
        }
      }
    }
  }
}