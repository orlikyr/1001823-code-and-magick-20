'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_COLOR = '#fff';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var mainColor = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  var maxTime = getMaxElement(times);

  var renderTopText = function () {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ты просто красавчик!', CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + (TEXT_HEIGHT * 2));
  };

  var opasity = function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  };

  var renderNames = function (playerName) {
    ctx.fillStyle = '#000';
    ctx.fillText(playerName, CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - CLOUD_GAP);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - 2 * CLOUD_GAP - TEXT_HEIGHT);
  };

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = mainColor;
    } else {
      ctx.fillStyle = 'rgba(77, 5, 232, ' + opasity(0.1, 1) + ')';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - CLOUD_GAP - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / -maxTime);
    renderNames(players[i]);
  }

  var init = function () {
    renderTopText();
  };
  init();
};

