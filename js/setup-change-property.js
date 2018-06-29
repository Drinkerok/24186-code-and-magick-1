'use strict';

(function () {
  var vars = window.vars;
  var commonFunctions = window.commonFunctions;

  var setupBlock = document.querySelector('.setup');
  var setupWizardCoat = setupBlock.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = setupBlock.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardFireball = setupBlock.querySelector('.setup-fireball-wrap');
  var setupInputCoat = setupBlock.querySelector('input[name="coat-color"]');
  var setupInputEyes = setupBlock.querySelector('input[name="eyes-color"]');
  var setupInputFireball = setupBlock.querySelector('input[name="fireball-color"]');

  function changeElementProperty(el, property, arr, input) {
    var elValue = commonFunctions.getRandomArrayElement(arr);
    el.style[property] = elValue;
    input.value = elValue;

    window.commonFunctions.debounce(renderWithValuews);
  }
  function renderWithValuews() {
    window.renderWizards({
      coatColor: setupInputCoat.value,
      eyesColor: setupInputEyes.value,
    });
  }


  setupWizardCoat.addEventListener('click', function () {
    changeElementProperty(setupWizardCoat, 'fill', vars.coatColors, setupInputCoat);
  });
  setupWizardEyes.addEventListener('click', function () {
    changeElementProperty(setupWizardEyes, 'fill', vars.eyesColors, setupInputEyes);
  });
  setupWizardFireball.addEventListener('click', function () {
    changeElementProperty(setupWizardFireball, 'backgroundColor', vars.fireballColors, setupInputFireball);
  });
})();
