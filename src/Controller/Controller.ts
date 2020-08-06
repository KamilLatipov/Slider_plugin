import View from "../View/View";

export default class Controller {
  view: View;
  root: HTMLElement;

  constructor(root: HTMLElement) {
    this.view = this.view = new View(this.root);
  }
}