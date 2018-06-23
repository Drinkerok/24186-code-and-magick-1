'use strict';

(function () {
  var getRandomArrayElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var dragElement = function (elActivator, elDragged) {
    elActivator.addEventListener('mousedown', function (e) {
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

        elDragged.style.top = (elDragged.offsetTop - shiftCoords.y) + 'px';
        elDragged.style.left = (elDragged.offsetLeft - shiftCoords.x) + 'px';
      };

      var onMouseUp = function (ev) {
        ev.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (evt) {
            evt.preventDefault();
            elActivator.removeEventListener('click', onClickPreventDefault);
          };
          elActivator.addEventListener('click', onClickPreventDefault);
        }
      };


      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };


  window.commonFunctions = {
    getRandomArrayElement: getRandomArrayElement,
    dragElement: dragElement,
  };
})();
