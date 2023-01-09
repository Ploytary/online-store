import { BaseComponent } from '../base-component/base-component';
import { ComponentProps } from '../../../shared/models/types';
import { Image } from '../image/image';
import { Rating } from '../rating/rating';
import { Button } from '../button/button';

import './product-card-preview.scss';

type ProductData = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
};

export class ProductCardPreview extends BaseComponent {
  public id: number;
  public title: string;
  public category: string;
  public description: string;
  public price: number;
  public discountPercentage: number;
  public discountPrice: number;
  public images: string[];
  public rating: number;
  public stock: number;
  public brand: string;
  public thumbSRC: string;

  constructor(productData: ProductData, props: ComponentProps = {}) {
    props.tagName = 'article';
    //'product-card-preview--list'
    props.classList = ['product-card-preview'];
    super(props);

    const {
      id,
      title,
      category,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      thumbnail,
      images,
    }: ProductData = productData;
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = +price.toFixed(2);
    this.discountPercentage = discountPercentage;
    this.discountPrice = +(this.price - (price / 100) * this.discountPercentage).toFixed(2);
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.thumbSRC = thumbnail;
    this.images = images;

    const imageComponent = new Image({
      width: 288,
      height: 288,
      classList: ['product-card-preview__image'],
      src: this.thumbSRC,
    });
    const titleComponent = new BaseComponent({
      tagName: 'h2',
      classList: ['product-card-preview__title'],
      content: this.title,
    });
    const brandComponent = new BaseComponent({
      tagName: 'p',
      classList: ['product-card-preview__brand'],
      content: this.brand,
    });
    const categoryComponent = new BaseComponent({
      tagName: 'p',
      classList: ['product-card-preview__category'],
      content: this.category,
    });
    const descriptionComponent = new BaseComponent({
      tagName: 'p',
      classList: ['product-card-preview__description'],
      content: this.description,
    });
    const priceComponent = new BaseComponent({ tagName: 'p', classList: ['product-card-preview__price'] });
    const basePrice = new BaseComponent({
      tagName: 'span',
      classList: ['product-card-preview__base-price'],
      content: '€' + this.price.toString(),
    });
    const discountPrice = new BaseComponent({
      tagName: 'span',
      classList: ['product-card-preview__discount-price'],
      content: '€' + this.discountPrice.toString(),
    });
    priceComponent.node.append(discountPrice.node, basePrice.node);
    const stockComponent = new BaseComponent({
      tagName: 'p',
      classList: ['product-card-preview__stock'],
      content: 'In stock: ' + this.stock.toString(),
    });
    const ratingComponent = new Rating({ value: this.rating, classList: ['product-card-preview__rating'] });
    const addCartButtonComponent = new Button({
      content: 'Add to cart',
      classList: ['product-card-preview__cart-button', 'button--accent'],
    });
    this.node.append(
      imageComponent.node,
      titleComponent.node,
      brandComponent.node,
      categoryComponent.node,
      descriptionComponent.node,
      priceComponent.node,
      ratingComponent.node,
      addCartButtonComponent.node,
      stockComponent.node
    );
  }
}
