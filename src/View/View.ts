export default class View {
  root: HTMLElement;
  slider: HTMLElement;
  scale: HTMLElement;
  pointer: HTMLElement;

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
    this.pointer.ondragstart = function() {
      return false;
    };
  }

  private drag = (event: any) => {
    this.moveAt(event.clientX);

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.unDrag);
  };

  private unDrag = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
  };

  private moveAt  = (pageX: any) => {
    let shiftX = pageX - this.slider.getBoundingClientRect().left;
    let position = shiftX - this.pointer.offsetWidth / 2;

    if (position + this.pointer.offsetWidth > this.slider.offsetWidth) {
      this.pointer.style.left = this.slider.offsetWidth - this.pointer.offsetWidth  + 'px';
    }
    else if (position  < 0) {
      this.pointer.style.left = 0 + 'px';
    }
    else {
      this.pointer.style.left = position + 'px';
    }
  };

  private onMouseMove = (event: any) => {
    this.moveAt(event.clientX);
  };
}