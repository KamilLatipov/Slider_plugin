import View from './view/View';
import './main.scss';

let root = document.getElementById('2d');

console.log(root);

let Slider = new View(root);

let button = document.createElement('button');
button.classList.add('button');
document.body.append(button);

button.onclick = function()  {
  Slider.setOrientation('vertical');
};

