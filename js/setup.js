'use strict';

// отрисовка одинаковых волшебников
(function () {
  var simularBlock = document.querySelector('.setup-similar');
  var similarList = simularBlock.querySelector('.setup-similar-list');

  window.renderWizards(window.wizardsArray, similarList);
  simularBlock.classList.remove('hidden');
})();


// перетаскивание окна setup
(function () {
  var setupBlock = document.querySelector('.setup');
  var dialogMoveHandler = setupBlock.querySelector('.upload');
  window.commonFunctions.dragElement(dialogMoveHandler, setupBlock);
})();
