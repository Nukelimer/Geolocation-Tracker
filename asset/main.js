const compass = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const parent = document.querySelector('.container');
const cancel = document.querySelector('.cancel');
const modal = document.querySelector('.modal');
const refresh = document.querySelector('.refresh');

navigator.geolocation.watchPosition(
  (responses) => {
    if (!responses.coords.speed) {
      speed.textContent = 0;
    } else {
      modal.classList('hide');
      speed.textContent = responses.coords.speed;
      compass.style.transform = `rotate(${responses.coords.heading}deg)`;
      console.log(responses.coords.heading);
    }
  },
  (err) => {
    if (err.code == 1) {
      parent.classList.add('hide');
      modal.classList.add('show');
    }
  }
);

refresh.addEventListener('click', () => {
  location.reload();
});

cancel.addEventListener('click', () => {
  modal.classList.add('hide');
});
