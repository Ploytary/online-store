import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';

import './rating.scss';

export class Rating extends BaseComponent {
  public value: number;
  constructor(props: ComponentProps) {
    props.tagName = 'div';
    const classList = ['rating'];
    super(props);

    const {value = 4} = props;
    this.value = +value;
    this.node.classList.add(...classList);

    const starsContainer = new BaseComponent({tagName: 'div', classList: ['rating__star-container']});
    const starClassArray = new Array(5).fill('star-empty').map((star, index) => index < Math.round(+value) ? 'star-filled' : star);
    starClassArray.forEach((star) => {
      const starElementString = `<svg class="rating__star" width="12" height="12"><use xlink:href="#${star}"></use></svg>`;
      starsContainer.node.insertAdjacentHTML('beforeend', starElementString);
    });

    const ratingNumericValue = new BaseComponent({tagName: 'p', classList: ['rating__value'], content: value.toString()});

    this.node.append(starsContainer.node, ratingNumericValue.node);
  }
}