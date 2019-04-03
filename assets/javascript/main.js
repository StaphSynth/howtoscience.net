/*******************************
howtoscience.net javascript

By David Allen
*******************************/

/******************************
Image overlay functionality
*******************************/

(function imageOverlay() {
  var overlay = document.createElement('div');
  var figureContainer = document.createElement('div');
  var figure = document.createElement('img');
  var body = document.querySelector('body');
  var clickableImages = document.querySelectorAll('.img-clickable');

  overlay.setAttribute('id', 'overlay');
  figureContainer.setAttribute('id', 'figureContainer');

  figureContainer.appendChild(figure);
  overlay.appendChild(figureContainer);
  body.appendChild(overlay);

  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
  });

  clickableImages.forEach(function(image) {
    image.addEventListener('click', function() {
      figure.setAttribute('src', image.src);
      overlay.style.display = 'block';
    });
  });
}());


/******************************
Mobile device drop-down menu
*******************************/

(function dropDownMenu() {
  var navButton = document.querySelector('#nav-button button');
  var mobileMenu = document.querySelector('.drop-down');

  navButton.addEventListener('click', function() {
    // switch(mobileMenu.style.display) {
    //   case 'block':
    //     mobileMenu.style.display = 'none';
    //     break;
    //   case 'none':
    //     mobileMenu.style.display = 'block';
    //     break;
    // }

    console.log(mobileMenu);
    console.log(mobileMenu.classList);

    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
    } else {
      mobileMenu.classList.add('open');
    }
  });
}());
