export class Thumb {
    thumbElem: HTMLElement;
    constructor() {
        this.initializeThumb();
    }
    initializeThumb() {
        this.thumbElem = document.createElement('div');
        this.thumbElem.classList.add('slider__thumb');
        this.thumbElem.addEventListener('mousedown', this.handleThumbClicked);
    }
    getElement() {
        return (this.thumbElem);
    }
    handleThumbClicked = (event: MouseEvent) => {
        let shiftX = event.clientX - this.thumbElem.getBoundingClientRect().left + 9;
        let moveThumbAt = (pageX: number) => {
            this.thumbElem.style.left = pageX - shiftX + 'px';
        }
        let onMouseMove = (event: MouseEvent) => {
            moveThumbAt(event.pageX);
        }
        this.thumbElem.ondragstart = function() {
            return false;
        };
        moveThumbAt(event.pageX);
        document.addEventListener('mousemove', onMouseMove);
        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

}