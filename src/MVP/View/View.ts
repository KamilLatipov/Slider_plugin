import { Track } from './Track';
import { Thumb } from './Thumb';
import { ProgressBar } from './ProgressBar';
import Publisher from "../Observer/Publisher";

class View extends Publisher {
    parentElement: HTMLElement;
    sliderElement: HTMLElement;
    track: Track;
    thumb: Thumb;
    progressBar: ProgressBar;

    constructor(parentElement: HTMLElement) {
        super();
        this.parentElement = parentElement;
        this.initView();
    }
    initView() {
        this.sliderElement = document.createElement('div');
        this.sliderElement.classList.add('slider');
        this.parentElement.append(this.sliderElement);
        this.track = new Track();
        this.sliderElement.append(this.track.getElement());
        this.thumb = new Thumb(this.track.getElement());
        this.track.getElement().append(this.thumb.getElement());
        this.progressBar = new ProgressBar();
        this.track.getElement().append(this.progressBar.getElement());
        this.attachViewToPublishers();
    }
    attachViewToPublishers() {
        this.thumb.attach('ThumbPositionChanged', this.notifyThumbPosChanged)
    }
    notifyThumbPosChanged(data: any){
        this.notify('ThumbPositionChanged', data);
    }
}


export default View;