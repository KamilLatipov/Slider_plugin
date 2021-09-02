import { Track } from './Track.';

class View {
    parentElement: HTMLElement;
    sliderElement: HTMLElement;
    track: Track;
    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
        this.sliderElement = new HTMLElement();
        this.initializeView();
    }
    initializeView() {
        this.sliderElement = document.createElement('div');
        this.sliderElement.classList.add('slider');
        this.parentElement.append(this.sliderElement);
        this.track = new Track(this.sliderElement);
        this.sliderElement.append(this.track.getTrackElem);
    }
}