import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';

import { Input } from '../input/input';
import { roundByNumberMagnitude } from '../../services/utils';

import './range-slider.scss';

export class RangeSlider extends BaseComponent {
  public minValue: number;
  public maxValue: number;
  private minValueInputElement: HTMLInputElement;
  private maxValueInputElement: HTMLInputElement;
  private handlerMinElement: HTMLInputElement;
  private handlerMaxElement: HTMLInputElement
  private rangeBarElement: HTMLElement;

  constructor(props: ComponentProps = {}, initMinValue = 0, initMaxValue = 1000) {
    props.tagName = 'div';
    super(props);
    const classList = ['range-slider'];
    this.node.classList.add(...classList)
    this.minValue = initMinValue;
    this.maxValue = initMaxValue;

    //импуты с ценами
    const inputsContainer = new BaseComponent({ tagName: 'div', classList: ['range-slider__price-input'] }).node;
    this.minValueInputElement = new Input({ classList: ['range-slider__min'], type: 'number', value: this.minValue.toString()}).node as HTMLInputElement;
    this.maxValueInputElement = new Input({ classList: ['range-slider__max'], type: 'number', value: this.maxValue.toString()}).node as HTMLInputElement;
    inputsContainer.append(this.minValueInputElement, this.maxValueInputElement);

    //полоса слайдера
    const rail = new BaseComponent({ tagName: 'div', classList: ['range-slider__rail'] }).node;
    this.rangeBarElement = new BaseComponent({ tagName: 'div', classList: ['range-slider__range-bar'] }).node;
    rail.append(this.rangeBarElement);

    //рычажки
    const handlersContainer = new BaseComponent({tagName: 'div', classList: ['range-slider__handlers']}).node
    const maxSliderRangeValue = roundByNumberMagnitude(this.maxValue);
    this.handlerMinElement = new Input({classList: ['range-slider__handler-min', 'range-slider__handler'], type: 'range', min: '0', max: maxSliderRangeValue.toString(), step: '1', value: this.minValue.toString()}).node as HTMLInputElement;
    this.handlerMaxElement = new Input({classList: ['range-max', 'range-slider__handler'], type: 'range', min: '0', max: maxSliderRangeValue.toString(), step: '1', value: this.maxValue.toString()}).node as HTMLInputElement;
    handlersContainer.append(this.handlerMinElement, this.handlerMaxElement)
    this.node.append(inputsContainer, rail, handlersContainer);

    const rangeInput = [this.handlerMinElement, this.handlerMaxElement];
    const priceInput = [this.minValueInputElement, this.maxValueInputElement];
    let priceGap = Math.floor(this.maxValue / 10) < 1 ? 1 : Math.floor(this.maxValue / 10);

    //обработчики
    priceInput.forEach((input) => {
      input.addEventListener('input', (evt: Event) => {
        let minVal = parseInt(this.minValueInputElement.value);
        let maxVal = parseInt(this.maxValueInputElement.value);
        if(evt.target === null) {return}
        if(!(evt.target instanceof HTMLElement)) {return}
        if (maxVal - minVal >= priceGap && maxVal <= +this.handlerMaxElement.max) {
          if (evt.target.classList.contains('range-slider__min')) {
            this.handlerMinElement.value = minVal.toString();
            this.rangeBarElement.style.left = (minVal / +this.handlerMinElement.max) * 100 + '%';
          } else {
            this.handlerMaxElement.value = maxVal.toString();
            this.rangeBarElement.style.right = 100 - (maxVal / +this.handlerMaxElement.max) * 100 + '%';
          }
        }
        this.minValue = +this.minValueInputElement.value;
        this.maxValue = +this.maxValueInputElement.value;
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener('input', (evt: Event) => {
        let minVal = parseInt(this.handlerMinElement.value);
        let maxVal = parseInt(this.handlerMaxElement.value);
        if(evt.target === null) {return}
        if(!(evt.target instanceof HTMLElement)) {return}
        if (maxVal - minVal < priceGap) {
          if (evt.target.classList.contains('range-slider__handler-min')) {
            this.handlerMinElement.value = (maxVal - priceGap).toString();
          } else {
            this.handlerMaxElement.value = (minVal + priceGap).toString();
          }
        } else {
          this.minValueInputElement.value = minVal.toString();
          this.maxValueInputElement.value = maxVal.toString();
          this.rangeBarElement.style.left = (minVal / +this.handlerMinElement.max) * 100 + '%';
          this.rangeBarElement.style.right = 100 - (maxVal / +this.handlerMaxElement.max) * 100 + '%';
        }
        this.minValue = +this.minValueInputElement.value;
        this.maxValue = +this.maxValueInputElement.value;
      });
    });

    const event = new Event('input');
    [...rangeInput,...priceInput].forEach(element => element.dispatchEvent(event));
  }

  updateSlider(sliderRangeData: {minValue: number, maxValue: number}):void {
    this.minValue = sliderRangeData.minValue;
    this.maxValue = sliderRangeData.maxValue;

    this.minValueInputElement.value = this.minValue.toString();
    this.maxValueInputElement.value = this.maxValue.toString();
    this.handlerMinElement.value = sliderRangeData.minValue.toString();
    this.handlerMaxElement.value = sliderRangeData.maxValue.toString();

    const maxSliderRangeValue = roundByNumberMagnitude(this.maxValue);
    this.handlerMinElement.max = maxSliderRangeValue.toString();
    this.handlerMaxElement.max = maxSliderRangeValue.toString();

    this.rangeBarElement.style.left = (this.minValue / +this.handlerMinElement.max) * 100 + '%';
    this.rangeBarElement.style.right = 100 - (this.maxValue / +this.handlerMaxElement.max) * 100 + '%';
  }
}