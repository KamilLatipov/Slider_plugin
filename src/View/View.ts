import Runner from './Runner';

export default class View {
  rootElement: HTMLElement;
  slider: HTMLElement;
  scale: HTMLElement;
  orientation: string = 'horizontal';

  constructor(root: HTMLElement) {
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

    const runner = new Runner(this.slider, this.orientation, 0 ,100);
  }

  public setOrientation(orientation: string) {
    if (orientation == 'horizontal') {
      this.orientation = 'horizontal';
      this.slider.classList.add('slider__horizontal');
    } else {
      this.orientation = 'vertical';
      //this.pointer.style.left = 0 + 'px';
      this.slider.classList.add('slider__vertical');
    }
  };
}
