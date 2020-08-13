import Subject from '../Observer/Subject';

export default class Runner extends Subject {
  runner: HTMLElement;
  parentElement: HTMLElement;
  orientation: string;
  position: number;
  parameters: {index: number, coordinate: number} = {index: 0, coordinate: 0};

  constructor(parentElement: HTMLElement, orientation: string, index: number) {
    super();

    this.parentElement = parentElement;
    this.orientation = orientation;
    this.parameters.index = index;

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

    if (this.orientation == 'horizontal') {
      this.parameters.coordinate = shiftX;
    }
    else {
      this.parameters.coordinate = shiftY;
    }

    this.notify('runnerDragged', this.parameters);
  };

  public setOrientation(orientation: string) {
    this.orientation = orientation;
    this.runner.style.left = 0 + 'px';
    this.runner.style.top = 0 + 'px';
    this.moveAt(this.position, this.orientation);
  }
}