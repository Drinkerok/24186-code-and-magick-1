'use strict';

// перетаскивание окна setup
(function () {
  var setupBlock = document.querySelector('.setup');
  var dialogMoveHandler = setupBlock.querySelector('.upload');
  window.commonFunctions.dragElement(dialogMoveHandler, setupBlock);
})();
