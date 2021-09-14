export class Track {
    trackElem: HTMLElement;
    minTipElem: HTMLElement;
    maxTipElem: HTMLElement;

    constructor() {
        this.initializeTrack();
    }
    initializeTrack() {
        this.trackElem = document.createElement('div');
        this.trackElem.classList.add('slider__track');
        this.minTipElem = document.createElement('div');
        this.minTipElem.classList.add('slider__track-min', 'slider__track-tip');
        this.trackElem.append(this.minTipElem);
        this.maxTipElem = document.createElement('div');
        this.maxTipElem.classList.add('slider__track-max', 'slider__track-tip');
        this.trackElem.append(this.maxTipElem);
    }
    getElement() {
        return (this.trackElem);
    }

}
