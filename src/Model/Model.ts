import View from '../View/View';
import Subject from './../Observer/Subject';

export default class Model extends Subject {
  firstRunnerPosition: number = 0;
  secondRunnerPosition: number = 0;
  min: number = 0;
  max: number = 0;

  constructor() {
    super();
  }

  public moveRunnerAt(parameters: {index: number, coordinate: number}) {
    if (parameters.index == 0) {
      this.firstRunnerPosition = this.toLimit(this.secondRunnerPosition, this.min, parameters.coordinate);
      this.notify('runnerPositionChanged', this.firstRunnerPosition);
    }
    else {
      this.secondRunnerPosition = this.toLimit(this.firstRunnerPosition, this.max, parameters.coordinate);
      this.notify('runnerPositionChanged', this.secondRunnerPosition);
    }
  }

  private toLimit(max: number, min: number, value: number) {
    return Math.min(Math.max(min, value), max);
  };
}
