'use strict';

var cloud = {
  width: 420,
  height: 270,
  color: '#fff',
  position: {
    x: 100,
    y: 10,
  },
  shadow: {
    delta: 10,
    color: 'rgba(0,0,0,0.7)',
  },
  gap: 20,
};

var textHeader = {
  font: '16px PT Mono',
  color: '#000',
  baseline: 'hanging',
  position: {
    x: cloud.position.x,
    y: cloud.position.y,
  },
  delta: 20,
  text: ['Ура вы победили!', 'Список результатов:'],
};

var histogram = {
  height: 150,
  position: {
    x: cloud.position.x + cloud.gap,
    y: cloud.position.y + cloud.height - cloud.gap * 2
  },
  bar: {
    width: 40,
    gap: 50,
    color: {
      main: '0,0,255',
      player: 'rgba(255,0,0,1)',
    },
    textPositionY: {
      name: 10,
      time: -20,
    }
  }
};


function renderCloud(ctx) {
  ctx.fillStyle = cloud.shadow.color;
  ctx.fillRect(cloud.position.x + cloud.shadow.delta, cloud.position.y + cloud.shadow.delta, cloud.width, cloud.height);

  ctx.fillStyle = cloud.color;
  ctx.fillRect(cloud.position.x, cloud.position.y, cloud.width, cloud.height);
}

function renderTextHeader(ctx) {
  ctx.font = textHeader.font;
  ctx.fillStyle = textHeader.color;
  ctx.textBaseline = textHeader.baseline;

  for (var i = 0; i < textHeader.text.length; i++) {
    var text = textHeader.text[i];
    var positionX = cloud.position.x + textHeader.delta;
    var positionY = cloud.position.y + textHeader.delta * (i + 1);

    ctx.fillText(text, positionX, positionY);
  }
}

function renderHistogram(ctx, names, times) {
  var maxTime = getMaxInArray(times);
  var bar = histogram.bar;
  var arrLength = times.length;


  for (var i = 0; i < arrLength; i++) {
    var time = times[i];
    var positionX = histogram.position.x + (bar.width + bar.gap) * i;
    var barHeight = time / maxTime * histogram.height;
    var positionY = histogram.position.y - barHeight;
    var randomOpacity = 0.3 + Math.random() * 0.7;
    var barColor = names[i] === 'Вы' ? bar.color.player : 'rgba(' + bar.color.main + ',' + randomOpacity.toFixed(2) + ')';

    ctx.fillStyle = barColor;
    ctx.fillRect(positionX, positionY, bar.width, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), positionX, positionY + bar.textPositionY.time);
    ctx.fillText(names[i], positionX, histogram.position.y + bar.textPositionY.name);
  }
}

function getMaxInArray(arr) {
  var maxValue = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}


function renderStatistics(ctx, names, times) {
  renderCloud(ctx);
  renderTextHeader(ctx);
  renderHistogram(ctx, names, times);
}


window.renderStatistics = renderStatistics;
