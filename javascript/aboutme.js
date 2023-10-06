const selfies = document.querySelectorAll('#slider img');
const firstSelfie = document.getElementById("first");
const lastSelfie = document.getElementById("last");

let currentIndex = 0;

function reset() {
  for (let i = 0; i < selfies.length; i++) {
    selfies[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  selfies[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = selfies.length - 1;
  }
  selfies[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= selfies.length) {
    currentIndex = 0;
  }
  selfies[currentIndex].classList.add('active');
}

initializeSlider();

firstSelfie.addEventListener('click', function() {
  slideLeft();
});

lastSelfie.addEventListener('click', function() {
  slideRight();
});