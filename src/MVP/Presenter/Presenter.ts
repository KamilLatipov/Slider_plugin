import {Configs} from '../../index';
import View from '../View/View';
import Model from '../Model/Model';

class Presenter {
    parentElem: HTMLElement;
    configs: Configs;
    view: View;
    model: Model;
    constructor(configs: Configs, parenElem: HTMLElement) {
        this.configs = configs;
        this.parentElem = parenElem;
        this.view = new View(parenElem);
        this.model = new Model(configs);
        this.initPresenter();
    }
    initPresenter() {
        this.view = new View(this.parentElem);
        this.view.attach('ThumbPositionChanged', this.handleThumbPosChanged);
    }
    handleThumbPosChanged(data: any) {
        let shiftX = data.thumbClickedEvent.clientX - this.view.thumb.getElement().getBoundingClientRect().left;
        let thumbLeft = data.thumbMovedEvent.clientX - shiftX - this.view.track.getElement().getBoundingClientRect().left;
        if (thumbLeft < 0) {
            thumbLeft = 0;
        }
        let rightEdge = this.view.track.getElement().offsetWidth - this.view.thumb.getElement().offsetWidth;
        if (thumbLeft > rightEdge) {
            thumbLeft = rightEdge;
        }
    }
}

export default Presenter;