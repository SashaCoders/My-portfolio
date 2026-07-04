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

$('#rulSkill').hover(function () {
  $('#rulSkill').css('background', " #F3F3FB");
  $('.blockSkill').css('background', "#F9F9FC");
   $('.blockSkill').css('box-shadow', "0 2px 4px 3px rgb(190 177 241 / 0.4)");
  $('#rulerSkill').css('display', "flex");
  $('.blockSkill').mouseleave(function () {
    $('#rulSkill').css('background', "#EBEBFD");
    $('.blockSkill').css('background', "none");
       $('.blockSkill').css('box-shadow', "none");
    $('#rulerSkill').css('display', "none");
  });
});

$('#rulAbout').hover(function () {
  $('#rulAbout').css('background', " #F3F3FB");
  $('.blockAbout').css('background', "#F9F9FC");
   $('.blockAbout').css('box-shadow', "0 2px 4px 3px rgb(190 177 241 / 0.4)");
  $('#rulerAbout').css('display', "flex");
  $('.blockAbout').mouseleave(function () {
    $('#rulAbout').css('background', "#EBEBFD");
    $('.blockAbout').css('background', "none");
       $('.blockAbout').css('box-shadow', "none");
    $('#rulerAbout').css('display', "none");
  });
});