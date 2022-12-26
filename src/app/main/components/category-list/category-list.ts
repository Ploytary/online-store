import './category-list.scss';
import { categoryList } from "../../project.moke";
import { CheckBox } from "../checkbox/checkbox";
import { ListComponent } from "../list-component/list-component";
import { BaseComponent } from "../base-component/base-component";
import { ComponentProps } from "../../../shared/models/types";


export class CategoryList extends BaseComponent {
  public state = {closed: true};
  public elementToShow = 10;
  public listElement: HTMLElement;
  public itemsList: HTMLElement[] = [];
  public expandButton: HTMLElement;

  constructor(props: ComponentProps = {}) {
    props.tagName = 'fieldset';
    props.classList = ['category-list-section', 'list-section'];
    super(props);

    const listElement = new ListComponent({classList: ['section__list']}).node;
    this.listElement = listElement;
    const listTitleElement = new BaseComponent({tagName: 'h3', classList: ['section__title'], content: 'Category'}).node;
    const expandLink = new BaseComponent({tagName: 'a', classList: ['category-list-section__expand-link', 'link'], content: 'show more'}).node;
    this.expandButton = expandLink;

    this.getItems(categoryList, listElement);
    this.getListStateClass();
    this.node.append(listTitleElement, listElement, expandLink);
    this.toggleExpand();
  }

  getItems(list: string[], listElement: HTMLElement): void {
    const optionNameFamily = 'category';
    list.forEach((categoryName) => {
      const listItem = new BaseComponent({tagName: 'li', classList: ['category-list-section__list-item', 'section__list-item']}).node;
      const checkbox = new CheckBox({name: optionNameFamily, value: categoryName, content: categoryName}).node;
      listItem.append(checkbox);
      this.itemsList.push(listItem);
      listElement.append(listItem);
    });
  }

  toggleExpand(): void {
    this.itemsList.forEach((item, index) => {
      if(index < this.elementToShow) item.classList.add('category-list-section__list-item--initial-visible');
    });

    this.expandButton.addEventListener('click', (event: any) => {
      if (!event.target.matches('.category-list-section__expand-link')) return;
      this.state.closed ? this.state.closed = false : this.state.closed = true;
      this.getListStateClass();
      this.state.closed ? this.expandButton.textContent = "show more" : this.expandButton.textContent = "show less";
    })
  }

  getListStateClass() {
    this.listElement.classList.toggle("category-list-section__list--open", !this.state.closed);
    this.listElement.classList.toggle("category-list-section__list--closed",  this.state.closed);
  }
}