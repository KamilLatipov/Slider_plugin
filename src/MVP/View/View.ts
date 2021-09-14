import { Track } from './Track';
import { Thumb } from './Thumb';
import { ProgressBar } from './ProgressBar';

class View {
    parentElement: HTMLElement;
    sliderElement: HTMLElement;
    track: Track;
    thumb: Thumb;
    progressBar: ProgressBar;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
        this.initializeView();
    }
    initializeView() {
        this.sliderElement = document.createElement('div');
        this.sliderElement.classList.add('slider');
        this.parentElement.append(this.sliderElement);
        this.track = new Track();
        this.sliderElement.append(this.track.getElement());
        this.thumb = new Thumb(this.track.getElement());
        this.track.getElement().append(this.thumb.getElement());
        this.progressBar = new ProgressBar();
        this.track.getElement().append(this.progressBar.getElement());
    }
}

export default View;