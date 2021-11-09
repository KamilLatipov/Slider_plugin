import View from './MVP/View/View';
import Presenter from './MVP/Presenter/Presenter';

export interface Configs {
    vertical: boolean;
    maxValue: number;
    minValue: number;
    step: number;
    interval: boolean;
    prompt: boolean;
}

function importAll(r: any) {
    r.keys().forEach(r);
}

importAll(require.context('./styles', true, /\.scss$/));

const parentElem = document.getElementsByClassName('slider-elem');
const options: Configs = {
    vertical: false,
    minValue: 0,
    maxValue: 100,
    step: 10,
    interval: false,
    prompt: false,
}

const slider = new Presenter(options,parentElem[0] as HTMLElement);