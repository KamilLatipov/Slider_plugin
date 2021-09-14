export class Thumb {
    thumbElem: HTMLElement;
    trackElem: HTMLElement;
    constructor(trackElem: HTMLElement) {
        this.trackElem = trackElem;
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
        let shiftX = event.clientX - this.thumbElem.getBoundingClientRect().left;
        let handleMouseMove = (event: MouseEvent) => {
            let thumbLeft = event.clientX - shiftX - this.trackElem.getBoundingClientRect().left;
            if (thumbLeft < 0) {
                thumbLeft = 0;
            }
            let rightEdge = this.trackElem.offsetWidth - this.thumbElem.offsetWidth;
            if (thumbLeft > rightEdge) {
                thumbLeft = rightEdge;
            }
            this.thumbElem.style.left = thumbLeft + 'px';
        }
        this.thumbElem.ondragstart = function() {
            return false;
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.onmouseup = () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }

}