import Publisher from '../Observer/Publisher';

interface thumbMovedData {
    thumbClickedEvent: MouseEvent;
    thumbMovedEvent: MouseEvent;
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
        let shiftX = event.clientX - this.thumbElem.getBoundingClientRect().left;
        let handleMouseMove = (event: MouseEvent) => {
            let thumbMovedData: thumbMovedData = {
                thumbClickedEvent: clickEvent,
                thumbMovedEvent: event
            };
            this.notify('ThumbPositionChanged', thumbMovedData);

            //this.thumbElem.style.left = thumbLeft + 'px';
        }
        this.thumbElem.ondragstart = function() {
            return false;
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.onmouseup = () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }

}