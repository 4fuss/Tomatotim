var timer = (function() {
  'use strict';

  var intervalIndex = 0;
  var timerInterval = config.workInterval;

  var intervals = [];
  var timer;

  var timerTick = function () {
    timerInterval--;

    if (timerInterval <= 0) {
      nextInterval();
    }

    var time = secondsToTime(timerInterval);
    views.timer.setTime(time);
    views.title.setTitle(time);
  };

  var nextInterval = function() {
    intervalIndex++;
    if (intervalIndex > intervals.length - 1) {
      intervalIndex = 0;
    }

    timerInterval = intervals[intervalIndex];

    if (intervalIndex === intervals.length - 1) {
      views.title.setFaviconToLongBreak();
    } else if (intervalIndex % 2 === 0) {
      views.title.setFaviconToWork();
    } else {
      views.title.setFaviconToBreak();
    }
  };

  var addLeadingZero = function(number) {
    if (number < 10) {
      number = '0' + number;
    }

    return number;
  };

  var secondsToTime = function(seconds) {
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    return addLeadingZero(minutes) + ':' + addLeadingZero(seconds);
  };

  var startTimer = function() {
    if (!timer) {
      timer = setInterval(timerTick, 1000);
    } else {
      timer = clearInterval(timer);
    }

    views.timerControls.toogleStartButtonCaption();
  };

  var pauseTimer = function() {
    clearInterval(timer);
  };

  var resetTimer = function() {
    pauseTimer();

    intervalIndex = 0;
    timerInterval = config.workInterval;

    var time = secondsToTime(timerInterval);

    views.timer.setTime(time);
    views.title.setFaviconToWork();
    views.title.setTitle(time);
  };

  var init = function () {
    views.timer.setTime(secondsToTime(timerInterval));

    for (var i = 0; i < config.repeat; i++) {
      intervals.push(config.workInterval);
      if (i < config.repeat - 1) {
        intervals.push(config.breakInterval);
      }
    }
    intervals.push(config.bigBreakInterval);

    startTimer();

  };

  return {
    init: init,
    startTimer: startTimer,
    pauseTimer: pauseTimer,
    nextInterval: nextInterval,
    resetTimer: resetTimer
  };

}());