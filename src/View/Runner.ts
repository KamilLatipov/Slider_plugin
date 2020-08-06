import Observer from './../Observer';

export default class Runner{
  runner: HTMLElement;
  parentElement: HTMLElement;
  orientation: string;
  position: number;

  constructor(parentElement: HTMLElement, orientation: string, index: number) {
    this.parentElement = parentElement;
    this.orientation = orientation;

    this.create();
  }

  private create() {
    this.runner = document.createElement('div');
    this.runner.classList.add('slider__runner');
    this.parentElement.appendChild(this.runner);

    this.runner.addEventListener('mousedown', this.drag);
    this.runner.ondragstart = function () {
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

  private moveAt = (position: number, orientation: any) => {
    if (orientation == 'horizontal') {
      this.runner.style.left = position + 'px';
    } else {
      this.runner.style.top = position + 'px';
    }
  };

  private onMouseMove = (event: any) => {
    let shiftX = (event.clientX - this.parentElement.getBoundingClientRect().left) - this.runner.offsetWidth / 2;
    let shiftY = (event.clientY - this.parentElement.getBoundingClientRect().top) - this.runner.offsetHeight / 2;

    let XCoordinate = this.toLimit(this.parentElement.getBoundingClientRect().width, 0, shiftX);
    let YCoordinate = this.toLimit(this.parentElement.getBoundingClientRect().height, 0, shiftY);

    if (this.orientation == 'horizontal') {
      this.position = XCoordinate;
    } else {
      this.position = YCoordinate;
    }

    this.moveAt(this.position, this.orientation);
  };

  private toLimit(max: number, min: number, value: number) {
    return Math.min(Math.max(min, value), max);
  };

  public setOrientation(orientation: string) {
    this.orientation = orientation;
    this.runner.style.left = 0 + 'px';
    this.runner.style.top = 0 + 'px';
    this.moveAt(this.position, this.orientation);
  }
}