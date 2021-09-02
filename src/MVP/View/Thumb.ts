export class Thumb {
    thumbElem: HTMLElement;
    constructor() {
        this.initializeThumb();
    }
    initializeThumb() {
        this.thumbElem = document.createElement('div');
        this.thumbElem.classList.add('slider__thumb');
    }
    getThumbElement() {
        return (this.thumbElem);
    }
}