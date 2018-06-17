'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');


var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];


var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function renderWizard(wizard) {
  var template = wizardTemplate.cloneNode(true);
  template.querySelector('.setup-similar-label').textContent = wizard.name;
  template.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  template.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  wizardsFragment.appendChild(template);
}


var wizards = [];
var wizardsFragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  var wizard = {
    name: getRandomArrayElement(names) + ' ' + getRandomArrayElement(surnames),
    coatColor: getRandomArrayElement(coatColors),
    eyesColor: getRandomArrayElement(eyesColors),
  };

  renderWizard(wizard);
  wizards.push(wizard);
}


document.querySelector('.setup-similar-list').appendChild(wizardsFragment);
var simularBlock = document.querySelector('.setup-similar');
simularBlock.classList.remove('hidden');
