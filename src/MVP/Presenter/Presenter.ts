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
        this.initPresenter();
        this.view = new View(parenElem);
        this.model = new Model(configs);
    }
    initPresenter() {
        this.view = new View(this.parentElem);
        this.view.attach('ThumbPositionChanged', this.handleThumbPosChanged);
    }
    handleThumbPosChanged(data: object) {

    }
}

export default Presenter;