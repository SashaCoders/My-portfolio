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
    let card1 = document.getElementById('card1');
    let card2 = document.getElementById('card2');
    let card3 = document.getElementById('card3');
    let card4 = document.getElementById('card4');

    let pointCard1 = document.getElementById('pointCard1');
    let pointCard2 = document.getElementById('pointCard2');
    let pointCard3 = document.getElementById('pointCard3');
    let pointCard4 = document.getElementById('pointCard4');
    let clicks = 1;
    document.querySelector('#arrowLeft').addEventListener('click', function () {
        clicks--;
        if (clicks == 0) {
            clicks = 4;

            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "block";

            pointCard1.style.background = "#D3CCF7";
            pointCard2.style.background = "#D3CCF7";
            pointCard3.style.background = "#D3CCF7";
            pointCard4.style.background = "#8775FC";

        } else if (clicks == 1) {
            card1.style.display = "block";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";

            pointCard1.style.background = "#8775FC";
            pointCard2.style.background = "#D3CCF7";
            pointCard3.style.background = "#D3CCF7";
            pointCard4.style.background = "#D3CCF7";
        } else if (clicks == 2) {
            card1.style.display = "none";
            card2.style.display = "block";
            card3.style.display = "none";
            card4.style.display = "none";

            pointCard1.style.background = "#D3CCF7";
            pointCard2.style.background = "#8775FC";
            pointCard3.style.background = "#D3CCF7";
            pointCard4.style.background = "#D3CCF7";
        } else if (clicks == 3) {
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "block";
            card4.style.display = "none";

            pointCard1.style.background = "#D3CCF7";
            pointCard2.style.background = "#D3CCF7";
            pointCard3.style.background = "#8775FC";
            pointCard4.style.background = "#D3CCF7";
        }
    });


    document.querySelector('#arrowRight').addEventListener('click', function () {
        clicks++;
        if (clicks == 5) {
            clicks = 1;

            card1.style.display = "block";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "none";

            pointCard1.style.background = "#8775FC";
            pointCard2.style.background = "#D3CCF7";
            pointCard3.style.background = "#D3CCF7";
            pointCard4.style.background = "#D3CCF7";

        } else if (clicks == 2) {
            card1.style.display = "none";
            card2.style.display = "block";
            card3.style.display = "none";
            card4.style.display = "none";

            pointCard1.style.background = "#D3CCF7";
            pointCard2.style.background = "#8775FC";
            pointCard3.style.background = "#D3CCF7";
            pointCard4.style.background = "#D3CCF7";
        } else if (clicks == 3) {
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "block";
            card4.style.display = "none";

            pointCard1.style.background = "#D3CCF7";
            pointCard2.style.background = "#D3CCF7";
            pointCard3.style.background = "#8775FC";
            pointCard4.style.background = "#D3CCF7";
        } else if (clicks == 4) {
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "none";
            card4.style.display = "block";

            pointCard1.style.background = "#D3CCF7";
            pointCard2.style.background = "#D3CCF7";
            pointCard3.style.background = "#D3CCF7";
            pointCard4.style.background = "#8775FC";
        }
    });
}

slider();