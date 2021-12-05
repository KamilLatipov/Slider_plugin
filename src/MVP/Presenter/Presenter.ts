import {Configs} from '../../index';
import View from '../View/View';
import Model from '../Model/Model';

class Presenter {
    parentElem: HTMLElement;
    view: View;
    model: Model;

    constructor(configs: Configs, parentElem: HTMLElement) {
        this.parentElem = parentElem;
        this.model = new Model(configs);
        this.view = new View(parentElem);
        this.view.attach('ThumbPositionChanged', this.handleThumbPosChanged);
        this.model.attach('ThumbPositionCalculated', this.handleThumbPosCalc);
    }
    handleThumbPosChanged = (relPosition: number) => {
        this.model.handleThumbPosChanged(relPosition);
    }
    handleThumbPosCalc = (relThumbPos: number) => {
        this.view.setThumbNewPos(relThumbPos);
    }
}

export default Presenter;
