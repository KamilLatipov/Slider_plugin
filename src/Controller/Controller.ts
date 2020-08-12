import View from './../View/View';
import Model from './../Model/Model';

export default class Controller {
  view: View;
  root: HTMLElement;
  model: Model;

  constructor(root: HTMLElement) {
    this.view = new View(this.root);
    this.model = new Model();
    this.view.attach('runnerDragged', this.pushRunnerDragged);
  }

  private pushRunnerDragged = (position: any) => {

  }
}