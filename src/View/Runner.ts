export default class Runner {
  min: number;
  max: number;
  pointer: HTMLElement;
  parentElement: HTMLElement;
  orientation: string;

  constructor(parentElement: HTMLElement, orientation: string, min: number, max: number) {
    this.parentElement = parentElement;
    this.orientation = orientation;
    this.min = min;
    this.max = max;

    this.create();
  }

  private create() {
    this.pointer = document.createElement('div');
    this.pointer.classList.add('slider__runner');
    this.parentElement.appendChild(this.pointer);

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
    let shiftX = (event.clientX - this.parentElement.getBoundingClientRect().left) - this.pointer.offsetWidth / 2;
    let shiftY = (event.clientY - this.parentElement.getBoundingClientRect().top) - this.pointer.offsetHeight / 2;

    let XCoordinate = this.toLimit(this.max, this.min, shiftX);
    let YCoordinate = this.toLimit(this.max, this.min, shiftY);

    this.moveAt(XCoordinate, YCoordinate, this.orientation);
  };

  private toLimit(max: number, min: number, value: number) {
    return Math.min(Math.max(min, value), max);
  };
}