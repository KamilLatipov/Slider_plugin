import {Configs} from '../../index';
import Publisher from "../Observer/Publisher";

class Model extends Publisher {
    configs: Configs;

    constructor(configs: Configs) {
        super();
        this.configs = configs;
    }
    handleThumbPosChanged(relPosition: number) {
        let thumbValue = this.calcThumbValue(relPosition);
        let relThumbPos = (1 / this.configs.maxValue - this.configs.minValue) * thumbValue;

        console.log(relThumbPos, thumbValue);
        this.notify('ThumbPositionCalculated', relThumbPos);
    }
    calcThumbValue = (relPosition: number) => {
        let thumbValue = (this.configs.maxValue - this.configs.minValue) * relPosition;
        if (this.configs.step) {
            thumbValue = Math.round(thumbValue / this.configs.step) * this.configs.step;
        }
        return thumbValue;
    }
}

export default Model;