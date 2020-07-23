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
    this.moveAt(event.pageX);

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.unDrag);
  };

  private unDrag = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
  };

  private moveAt = (pageX: any) => {
    this.pointer.style.left = pageX - this.pointer.offsetWidth / 2 + 'px';
  };

  private onMouseMove = (event: any) => {
    this.moveAt(event.pageX);
  };
}