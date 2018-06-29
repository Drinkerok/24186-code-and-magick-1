'use strict';


(function () {
  var wizardsArr;
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsFragment = document.createDocumentFragment();

  var similarBlock = document.querySelector('.setup-similar');
  var similarList = similarBlock.querySelector('.setup-similar-list');


  function sortSimilarWizards(mainWizard) {
    setRank(mainWizard);
    wizardsArr.sort(sortByRank);
  }
  function setRank(mainWizard) {
    var Rank = {
      coatColor: 2,
      eyesColor: 1,
    };

    wizardsArr.forEach(function (wizard) {
      var wizardRank = 0;

      for (var keyRank in Rank) {
        if (wizard[keyRank] === mainWizard[keyRank]) {
          wizardRank += Rank[keyRank];
        }
      }

      wizard.rank = wizardRank;
    });
  }
  function sortByRank(a, b) {
    var rankDiff = b.rank - a.rank;
    if (rankDiff === 0) {
      rankDiff = b.name > a.name ? 1 : -1;
    }
    return rankDiff;
  }

  var renderWizards = function (mainWizard) {
    wizardsArr = window.wizards;
    var WIZARDS_MAX_COUNT = 4;
    var wizardsToShow = Math.min(wizardsArr.length, WIZARDS_MAX_COUNT);

    if (mainWizard) {
      sortSimilarWizards(mainWizard);
    }

    for (var i = 0; i < wizardsToShow; i++) {
      renderWizard(wizardsArr[i]);
    }

    similarList.innerHTML = '';
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
