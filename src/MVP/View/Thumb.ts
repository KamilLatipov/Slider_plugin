import Publisher from '../Observer/Publisher';

interface thumbMovedData {
    thumbClickedEvent: MouseEvent;
    thumbMovedEvent: MouseEvent;
    thumbLeftPos: number;
    trackLeftPos: number;
    thumbOffsetWidth: number;
    trackOffsetWidth: number;
}

export class Thumb extends Publisher{
    thumbElem: HTMLElement;
    trackElem: HTMLElement;
    constructor(trackElem: HTMLElement) {
        super();
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
        let handleMouseMove = (event: MouseEvent) => {
           this.notify('ThumbPositionChanged', event);
        }
        this.thumbElem.ondragstart = function() {
            return false;
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.onmouseup = () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }
    setThumbNewPos(thumbLeftPos: number) {
        thumbLeftPos = thumbLeftPos - this.thumbElem.getBoundingClientRect().width;
        this.thumbElem.style.left = thumbLeftPos + 'px';
    }
}