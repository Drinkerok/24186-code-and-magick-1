'use strict';

(function () {
  var setupBlock = document.querySelector('.setup');
  var setupForm = setupBlock.querySelector('.setup-wizard-form');
  var setupSubmit = setupBlock.querySelector('.setup-submit');
  var setupName = setupBlock.querySelector('.setup-user-name');

  function sendForm() {
    if (!setupName.validity.valid) {
      return;
    }

    window.backend.save(new FormData(setupForm), onSendSuccess, onSendFail);
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

  var onSendSuccess = function () {
    window.setupMethods.close();
  };
  var onSendFail = function () {
  };
  setupSubmit.addEventListener('click', submitClickHandler);
  setupSubmit.addEventListener('keydown', sendFormByEnterHandler);
})();
