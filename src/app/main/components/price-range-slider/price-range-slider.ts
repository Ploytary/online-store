import { RangeSlider } from "../range-slider/range-slider";
import { ComponentProps } from "../../../shared/models/types";
import { BaseComponent } from "../base-component/base-component";
import { priceRange } from '../../project.moke';

import '../slider-section/slider-section';

export class PriceRangeSlider extends BaseComponent {
  sliderElement: HTMLElement;
  titleElement: HTMLElement;

  constructor(props: ComponentProps = {}) {
    props.tagName = 'fieldset';
    props.classList = ['price-range-slider', 'slider-section'];
    super(props);
    this.titleElement = new BaseComponent({tagName: 'h4', classList: ['price-range-slider__title', 'slider-section__title'], content: 'Price'}).node;
    this.sliderElement = new RangeSlider({classList: ['price-range-slider__range-slider']}, priceRange.minValue, priceRange.maxValue).node;
    this.node.append(this.titleElement, this.sliderElement);
  }
}