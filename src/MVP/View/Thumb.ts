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
        let clickEvent: MouseEvent = event;
        let thumbLeftPos = this.thumbElem.getBoundingClientRect().left;
        let trackLeftPos = this.trackElem.getBoundingClientRect().left;
        let thumbOffsetWidth = this.thumbElem.offsetWidth;
        let trackOffsetWidth = this.trackElem.offsetWidth;
        let handleMouseMove = (event: MouseEvent) => {
            let thumbMovedData: thumbMovedData = {
                thumbClickedEvent: clickEvent,
                thumbMovedEvent: event,
                thumbLeftPos: thumbLeftPos,
                trackLeftPos: trackLeftPos,
                thumbOffsetWidth: thumbOffsetWidth,
                trackOffsetWidth: trackOffsetWidth,
            };
            this.notify('ThumbPositionChanged', thumbMovedData);
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
        this.thumbElem.style.left = thumbLeftPos + 'px';
    }
}