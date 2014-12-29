views.images = (function() {
  'use strict';

  var images = document.querySelectorAll('#progress img');

  var setImageType = function(type, index) {
    var imgName;
    if (type === 'unfinished') {
      imgName = 'black';
    } else if (type === 'finished') {
      imgName = 'white';
    } else if (type === 'work') {
      imgName = 'red';
    } else if (type === 'break') {
      imgName = 'green';
    } else if (type === 'bigBreak') {
      imgName = 'blue';
    }

    images[index].src = 'img/tomato-' + imgName + '.png';
  };

  var resetImages = function() {
    for (var index = 0; index < images.length; index++) {
      setImageType('unfinished', index);
    }
  };

  return {
    setImageType: setImageType,
    resetImages: resetImages
  };

}());