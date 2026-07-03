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


// slider();

function sliderNew() {
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let card3 = document.getElementById('card3');
    let card4 = document.getElementById('card4');

    let clicks = 1;
    document.querySelector('#arrowLeft').addEventListener('click', function () {
        clicks--;
        if (clicks == 0) {
            clicks = 4;

            card1.style.opacity = 0;
            card2.style.opacity = 0;
            card3.style.opacity = 0;
            card4.style.opacity = 1;

        } else if (clicks == 1) {
            card1.style.opacity = 1;
            card2.style.opacity = 0;
            card3.style.opacity = 0;
            card4.style.opacity = 0;
        } else if (clicks == 2) {
            card1.style.opacity = 0;
            card2.style.opacity = 1;
            card3.style.opacity = 0;
            card4.style.opacity = 0;
        } else if (clicks == 3) {
            card1.style.opacity = 0;
            card2.style.opacity = 0;
            card3.style.opacity = 1;
            card4.style.opacity = 0;
        }
    });


    document.querySelector('#arrowRight').addEventListener('click', function () {
        clicks++;
        if (clicks == 5) {
            clicks = 1;

            card1.style.opacity = 1;
            card2.style.opacity = 0;
            card3.style.opacity = 0;
            card4.style.opacity = 0;

        } else if (clicks == 2) {
            card1.style.opacity = 0;
            card2.style.opacity = 1;
            card3.style.opacity = 0;
            card4.style.opacity = 0;
        } else if (clicks == 3) {
            card1.style.opacity = 0;
            card2.style.opacity = 0;
            card3.style.opacity = 1;
            card4.style.opacity = 0;
        } else if (clicks == 4) {
            card1.style.opacity = 0;
            card2.style.opacity = 0;
            card3.style.opacity = 0;
            card4.style.opacity = 1;
        }
    });
}

sliderNew();