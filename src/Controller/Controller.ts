import View from './../View/View';
import Model from './../Model/Model';

export default class Controller {
  view: View;
  root: HTMLElement;
  model: Model;

  constructor(root: HTMLElement) {
    this.view = new View(this.root);
    this.model = new Model();
    this.view.attach('runnerDragged', this.handleRunnerDragged);
    this.model.attach('runnerPositionChanged', this.setRunnerPosition);
  }

  private handleRunnerDragged = (parameters: {index: number, coordinate: number}) => {
    this.model.moveRunnerAt(parameters);
  }

  private setRunnerPosition() {

  }
}