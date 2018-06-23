'use strict';

(function () {
  var setupBlock = document.querySelector('.setup');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = setupBlock.querySelector('.setup-close');
  var setupIcon = setupOpenButton.querySelector('.setup-open-icon');

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


  setupOpenButton.addEventListener('click', openSetup);
  setupCloseButton.addEventListener('click', closeSetup);
  setupCloseButton.addEventListener('keydown', closeByEnterHandler);
  setupIcon.addEventListener('keydown', openByEnterHandler);


  window.setupMethods = {
    open: openSetup,
    close: closeSetup,
  };
})();
