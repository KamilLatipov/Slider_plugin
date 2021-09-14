import View from './MVP/View/View';

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
    maxValue: 0,
    step: 1,
    interval: false,
    prompt: false,
}

const slider = new View(parentElem[0] as HTMLElement);