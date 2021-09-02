export class Track {
    trackElem: HTMLElement;
    constructor() {
        this.initializeTrack();
    }
    initializeTrack() {
        this.trackElem = document.createElement('div');
        this.trackElem.classList.add('slider__track');
    }
    getTrackElement() {
        return (this.trackElem);
    }
}
