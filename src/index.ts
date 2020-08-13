import View from './View/View';
import './main.scss';

let root = document.getElementById('2d');

let Slider = new View(root);

let button = document.createElement('input');
button.setAttribute("type", "checkbox");
button.setAttribute("checked", "true");
button.classList.add('button');
document.body.append(button);

button.onchange = function()  {
  if (button.checked) {
    Slider.setOrientation('horizontal');
  }
  else {
    Slider.setOrientation('vertical');
  }
};

