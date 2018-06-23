'use strict';

(function () {
  var wizards = [];
  var vars = window.vars;
  var commonFunctions = window.commonFunctions;


  for (var i = 0; i < 4; i++) {
    var wizard = {
      name: commonFunctions.getRandomArrayElement(vars.names) + ' ' + commonFunctions.getRandomArrayElement(vars.surnames),
      coatColor: commonFunctions.getRandomArrayElement(vars.coatColors),
      eyesColor: commonFunctions.getRandomArrayElement(vars.eyesColors),
    };

    wizards.push(wizard);
  }


  window.wizardsArray = wizards;
})();
