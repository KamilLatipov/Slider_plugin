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
        this.calcNumberOfSegments = this.makeCaching(this.calcNumberOfSegments);
        this.view = new View(parentElem);
        this.view.attach('ThumbPositionChanged', this.handleThumbPosChanged);
    }
    handleThumbPosChanged = (data: any) => {
        let shiftX: number;
        let thumbLeft: number;
        
        let numberOfSegments = this.calcNumberOfSegments(data.trackOffsetWidth);
        shiftX = data.thumbClickedEvent.clientX - data.thumbLeftPos;
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
    
    makeCaching = (fn: Function) => {
        let cache: {[key: number]: any} = {};
        return (x: number) => {
            if (x in cache) {
                console.log('Fetching from cache');
                return cache[x];
            }
            else {
                console.log('Calculating result');
                let result = fn(x);
                cache[x] = result;
                return result;
            }
        }
    }
    calcNumberOfSegments = (trackWidth: number) => {
        let numberOfValues = this.configs.maxValue - this.configs.minValue;
        let numberOfValuesWithoutRemainder = numberOfValues - Math.floor(numberOfValues%this.configs.step);
        console.log(trackWidth/numberOfValuesWithoutRemainder, trackWidth);
        return (trackWidth/numberOfValuesWithoutRemainder);
    }
}

export default Presenter;
