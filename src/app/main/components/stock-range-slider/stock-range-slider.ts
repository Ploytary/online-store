import { RangeSlider } from '../range-slider/range-slider';
import { ComponentProps } from '../../../shared/models/types';
import { BaseComponent } from '../base-component/base-component';
import { stockRange } from '../../project.moke';

import '../slider-section/slider-section';

export class StockRangeSlider extends BaseComponent {
  sliderElement: HTMLElement;
  titleElement: HTMLElement;

  constructor(props: ComponentProps = {}) {
    props.tagName = 'fieldset';
    props.classList = ['stock-range-slider', 'slider-section'];
    super(props);
    this.titleElement = new BaseComponent({
      tagName: 'h4',
      classList: ['stock-range-slider__title', 'slider-section__title'],
      content: 'Stock',
    }).node;
    this.sliderElement = new RangeSlider(
      { classList: ['stock-range-slider__range-slider'] },
      stockRange.minValue,
      stockRange.maxValue
    ).node;
    this.node.append(this.titleElement, this.sliderElement);
    console.log(this.sliderElement);
  }
}
