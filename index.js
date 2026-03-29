

// копіювання номера телефону та пошти
function copyText(id) {
  const textToCopy = document.getElementById(id);
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy.innerText).then(() => {
      alert('Текст скопійовано!');
    }).catch(err => {
      console.error('Помилка копіювання: ', err);
    });
  }
}
// Слайдер відгуків
function slider() {
  let offset = 0;
  const sliderLine = document.querySelector('.slider-line');

  document.querySelector('#arrowRight').addEventListener('click', function () {
    offset += 830;
    if (offset > 2500) {
      offset = 0;

    }
    sliderLine.style.left = -offset + 'px';
  });
  document.querySelector('#arrowLeft').addEventListener('click', function () {
    offset -= 830;
    if (offset < 0) {
      offset = 2490;

    }
    sliderLine.style.left = -offset + 'px';
  });
}



slider();