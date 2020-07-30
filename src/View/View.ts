export default class View {
  root: HTMLElement;
  slider: HTMLElement;
  scale: HTMLElement;
  pointer: HTMLElement;
  orientation: string = 'horizontal';

  constructor(root: HTMLElement) {
    this.root = root;

    this.create();
  }

  private create() {
    this.slider = document.createElement('div');
    this.slider.classList.add('slider');
    this.root.appendChild(this.slider);
    this.scale = document.createElement('div');
    this.scale.classList.add('slider__scale');
    this.slider.appendChild(this.scale);
    this.pointer = document.createElement('div');
    this.pointer.classList.add('slider__runner');
    this.slider.appendChild(this.pointer);

    this.pointer.addEventListener('mousedown', this.drag);
    this.pointer.ondragstart = function () {
      return false;
    };
  }

  private drag = () => {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.unDrag);
  };

  private unDrag = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
  };

  private moveAt = (XCoordinate: any, YCoordinate: any, orientation: any) => {
    if (orientation == 'horizontal') {
      this.pointer.style.left = XCoordinate + 'px';
    } else {
      this.pointer.style.top = YCoordinate + 'px';
    }
  };

  private onMouseMove = (event: any) => {
    let shiftX = (event.clientX - this.slider.getBoundingClientRect().left) - this.pointer.offsetWidth / 2;
    let shiftY = (event.clientY - this.slider.getBoundingClientRect().top) - this.pointer.offsetHeight / 2;

    let XCoordinate = this.toLimit(this.slider.offsetWidth, 0, shiftX);
    let YCoordinate = this.toLimit(this.slider.offsetHeight, 0, shiftY);

    this.moveAt(XCoordinate, YCoordinate, this.orientation);
  };

  public setOrientation(orientation: string) {
    if (orientation == 'horizontal') {
      this.orientation = 'horizontal';
      this.slider.classList.add('slider__horizontal');
    } else {
      this.orientation = 'vertical';
      this.pointer.style.left = 0 + 'px';
      this.slider.classList.add('slider__vertical');
    }
  }

  private toLimit(max: number, min: number, value: number) {
    return Math.min(Math.max(min, value), max);
  };
}
