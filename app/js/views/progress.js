views.progress = (function() {
  'use strict';

  var imagesWrapper = document.getElementById('progress');
  var images = imagesWrapper.getElementsByTagName('i');

  var description = document.getElementById('description');

  var imagesAlt = {
    'unfinished': 'Unfinished interval',
    'work': 'Work interval',
    'break': 'Break interval',
    'longbreak': 'Long break interval',
    'finished' : 'Finished interval'
  };

  var setImageType = function(type, index) {
    images[index].className = 'icon-tomato color-' + type;
    images[index].title = imagesAlt[type];
  };

  var resetProgress = function() {
    setDescription('');

    for (var index = 0; index < images.length; index++) {
      setImageType('unfinished', index);
    }
  };

  var createImage = function(type) {
    var i = document.createElement('i');
    i.className = 'icon-tomato color-' + type;
    i.title = imagesAlt[type];
    imagesWrapper.appendChild(i);
  };

  var setDescription = function(text) {
    description.innerHTML = text;
  };

  return {
    setDescription: setDescription,
    setImageType: setImageType,
    resetProgress: resetProgress,
    createImage: createImage
  };

}());
