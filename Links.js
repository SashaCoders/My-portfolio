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
  $('#rulSkill').css('background', " #5cc7dc");
  $('.blockSkill').css('background', "#8ECAFF");
  $('#rulerSkill').css('display', "flex");
  $('.blockSkill').mouseleave(function () {
    $('#rulSkill').css('background', "#84E0F3");
    $('.blockSkill').css('background', "none");
    $('#rulerSkill').css('display', "none");
  });




});

$('#rulAbout').hover(function () {
  $('#rulAbout').css('background', " #5cc7dc");
  $('.blockAbout').css('background', "#8ECAFF");
  $('#rulerAbout').css('display', "flex");
  $('.blockAbout').mouseleave(function () {
    $('#rulAbout').css('background', "#84E0F3");
    $('.blockAbout').css('background', "none");
    $('#rulerAbout').css('display', "none");
  });
});