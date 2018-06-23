'use strict';


(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsFragment = document.createDocumentFragment();

  var similarBlock = document.querySelector('.setup-similar');
  var similarList = similarBlock.querySelector('.setup-similar-list');

  var renderWizards = function (wizardsArr) {
    for (var i = 0; i < wizardsArr.length; i++) {
      renderWizard(wizardsArr[i]);
    }

    similarList.appendChild(wizardsFragment);
    similarBlock.classList.remove('hidden');
  };

  function renderWizard(wizard) {
    var template = wizardTemplate.cloneNode(true);
    template.querySelector('.setup-similar-label').textContent = wizard.name;
    template.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    template.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    wizardsFragment.appendChild(template);
  }


  window.renderWizards = renderWizards;
})();
