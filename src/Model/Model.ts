import View from './../View/View';
import Subject from './../Observer/Subject';

export default class Model extends Subject {
  firstRunnerPosition: number;
  secondRunnerPosition: number;
  view: View;
  root: HTMLElement;

  constructor() {
    super();

  }
}
