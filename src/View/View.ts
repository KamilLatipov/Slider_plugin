import Runner from './Runner';
import Subject from './../Observer/Subject';

export default class View extends Subject {
  rootElement: HTMLElement;
  slider: HTMLElement;
  scale: HTMLElement;
  orientation: string = 'horizontal';
  runners: Map<number, Runner> = new Map<number, Runner>();

  constructor(root: HTMLElement) {
    super();

    this.rootElement = root;

    this.create();
  }

  private create() {
    this.slider = document.createElement('div');
    this.slider.classList.add('slider');
    this.rootElement.appendChild(this.slider);
    this.scale = document.createElement('div');
    this.scale.classList.add('slider__scale');
    this.slider.appendChild(this.scale);

    let runner = new Runner(this.slider, this.orientation, 0);
    runner.attach('runnerDragged', this.onRunnerDragged);
    this.runners.set(0, runner);
  }

  public setOrientation(orientation: string) {
    let that = this;
    if (orientation == 'horizontal') {
      this.orientation = 'horizontal';
      this.slider.classList.remove('slider__vertical');
      this.slider.classList.add('slider__horizontal');
      this.runners.forEach(function(Runner) {
        Runner.setOrientation(that.orientation);
      })
    }
    else {
      this.orientation = 'vertical';
      this.slider.classList.remove('slider__horizontal');
      this.slider.classList.add('slider__vertical');
      this.runners.forEach(function(Runner) {
        Runner.setOrientation(that.orientation);
      })
    }
  };

  public onRunnerDragged(parameters: {index: number, coordinate: number}) {
    this.notify('runnerDragged', parameters);
  }
}