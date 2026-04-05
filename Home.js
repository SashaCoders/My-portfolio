// копіювання буде на номер телефону та пошта + login та password 

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
let rulSkill = true;
$('#rulSkill').click(function () {
  if (rulSkill == true) {
    $('.blockSkill').css('background', "#8ECAFF");
    $('#rulerSkill').css('opacity', 1);
    rulSkill = false;
  } else {
    $('.blockSkill').css('background', "none");
    $('#rulerSkill').css('opacity', 0);
    rulSkill = true;
  }
});
let rulAbout = true;
$('#rulAbout').click(function () {
  if (rulAbout == true) {
    $('.blockAbout').css('background', "#8ECAFF");
    $('#rulerAbout').css('opacity', 1);
    rulAbout = false;
  } else {
    $('.blockAbout').css('background', "none");
    $('#rulerAbout').css('opacity', 0);
    rulAbout = true;
  }
});