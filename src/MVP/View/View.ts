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
        this.attachChildElemToParent(this.sliderElement, this.parentElement);
        this.track = new Track();
        this.attachChildElemToParent(this.track.getElement(), this.sliderElement);
        this.thumb = new Thumb();
        this.attachChildElemToParent(this.thumb.getElement(), this.track.getElement());
        this.progressBar = new ProgressBar();
        this.attachChildElemToParent(this.progressBar.getElement(), this.track.getElement());

    }
    attachChildElemToParent(childElement: HTMLElement, parentElement: HTMLElement) {
        parentElement.append(childElement);
    }
}