'use strict';

(function () {
  var wizards = [];
  var vars = window.vars;
  var commonFunctions = window.commonFunctions;

  var createWizards = function (wizardsObj) {
    for (var i = 0; i < wizardsObj.length; i++) {
      var wizardData = wizardsObj[i];

      var wizard = {
        name: wizardData.name || commonFunctions.getRandomArrayElement(vars.names),
        coatColor: wizardData.colorCoat || commonFunctions.getRandomArrayElement(vars.coatColors),
        eyesColor: wizardData.colorEyes || commonFunctions.getRandomArrayElement(vars.eyesColors),
      };

      wizards.push(wizard);
    }
    window.wizards = wizards;

    window.renderWizards();
  };

  var wizardsLoadFail = function () {
  };


  window.backend.load(createWizards, wizardsLoadFail);
})();
