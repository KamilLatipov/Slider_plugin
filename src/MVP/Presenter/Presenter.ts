import {Configs} from '../../index';
import View from '../View/View';
import Model from '../Model/Model';

class Presenter {
    parentElem: HTMLElement;
    configs: Configs;
    view: View;
    constructor(configs: Configs, parentElem: HTMLElement) {
        this.configs = configs;
        this.parentElem = parentElem;
        this.view = new View(parentElem);
        this.view.attach('ThumbPositionChanged', this.handleThumbPosChanged);
    }
    handleThumbPosChanged = (data: any) => {
        let shiftX: number;
        let thumbLeft: number;
        shiftX = data.thumbClickedEvent.clientX - data.thumbLeftPos;
        console.log(data.thumbMovedEvent.clientX, data.trackLeftPos);
        thumbLeft = data.thumbMovedEvent.clientX - shiftX - data.trackLeftPos;
        if (thumbLeft < 0) {
            thumbLeft = 0;
        }
        let rightEdge = data.trackOffsetWidth - data.thumbOffsetWidth;
        if (thumbLeft > rightEdge) {
            thumbLeft = rightEdge;
        }
        this.view.setThumbNewPos(thumbLeft);
    }
}

export default Presenter;