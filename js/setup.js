'use strict';

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
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
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


var setupBlock = document.querySelector('.setup');
var setupOpenButton = document.querySelector('.setup-open');
var setupCloseButton = setupBlock.querySelector('.setup-close');
var setupIcon = setupOpenButton.querySelector('.setup-open-icon');
var setupForm = setupBlock.querySelector('.setup-wizard-form');
var setupSubmit = setupBlock.querySelector('.setup-submit');
var setupName = setupBlock.querySelector('.setup-user-name');
var setupWizardCoat = setupBlock.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = setupBlock.querySelector('.setup-wizard .wizard-eyes');
var setupWizardFireball = setupBlock.querySelector('.setup-fireball-wrap');
var setupInputCoat = setupBlock.querySelector('input[name="coat-color"]');
var setupInputEyes = setupBlock.querySelector('input[name="eyes-color"]');
var setupInputFireball = setupBlock.querySelector('input[name="fireball-color"]');

function openSetup() {
  setupBlock.classList.remove('hidden');
  window.addEventListener('keydown', closeSetupByEscHandler);
}
function closeSetup() {
  setupBlock.classList.add('hidden');
  window.removeEventListener('keydown', closeSetupByEscHandler);
  setupBlock.style.top = '';
  setupBlock.style.left = '';
}
function closeSetupByEscHandler(e) {
  if (e.keyCode === 27) {
    closeSetup();
  }
}
function openByEnterHandler(e) {
  if (e.keyCode === 13) {
    openSetup();
  }
}
function closeByEnterHandler(e) {
  if (e.keyCode === 13) {
    closeSetup();
  }
}
function sendForm() {
  if (!setupName.validity.valid) {
    return;
  }
  setupForm.submit();
}
function submitClickHandler(e) {
  e.preventDefault();
  sendForm();
}
function sendFormByEnterHandler(e) {
  if (e.keyCode === 13) {
    sendForm();
  }
}

setupOpenButton.addEventListener('click', openSetup);
setupCloseButton.addEventListener('click', closeSetup);
setupCloseButton.addEventListener('keydown', closeByEnterHandler);
setupIcon.addEventListener('keydown', openByEnterHandler);

setupSubmit.addEventListener('click', submitClickHandler);
setupSubmit.addEventListener('keydown', sendFormByEnterHandler);


function changeElementProperty(el, property, arr, input) {
  var elValue = getRandomArrayElement(arr);
  el.style[property] = elValue;
  input.value = elValue;
}

setupWizardCoat.addEventListener('click', function () {
  changeElementProperty(setupWizardCoat, 'fill', coatColors, setupInputCoat);
});
setupWizardEyes.addEventListener('click', function () {
  changeElementProperty(setupWizardEyes, 'fill', eyesColors, setupInputEyes);
});
setupWizardFireball.addEventListener('click', function () {
  changeElementProperty(setupWizardFireball, 'backgroundColor', fireballColors, setupInputFireball);
});


var dialogMoveHandler = setupBlock.querySelector('.upload');
dialogMoveHandler.addEventListener('mousedown', function (e) {
  var startCoords = {
    x: e.clientX,
    y: e.clientY,
  };
  var dragged = false;

  var onMouseMove = function (ev) {
    var shiftCoords = {
      x: startCoords.x - ev.clientX,
      y: startCoords.y - ev.clientY,
    };

    startCoords = {
      x: ev.clientX,
      y: ev.clientY
    };

    dragged = true;

    setupBlock.style.top = (setupBlock.offsetTop - shiftCoords.y) + 'px';
    setupBlock.style.left = (setupBlock.offsetLeft - shiftCoords.x) + 'px';
  };

  var onMouseUp = function (ev) {
    ev.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogMoveHandler.removeEventListener('click', onClickPreventDefault);
      };
      dialogMoveHandler.addEventListener('click', onClickPreventDefault);
    }
  };


  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
