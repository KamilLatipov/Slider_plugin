export class ProgressBar {
    progressBarElem: HTMLElement;
    constructor() {
        this.initializeProgressBarElem();
    }
    initializeProgressBarElem() {
        this.progressBarElem = document.createElement('div');
        this.progressBarElem.classList.add('slider__progress-bar');
    }
    getElement()
    {
        return (this.progressBarElem);
    }
}