const btnHour = document.getElementsByClassName('hour-shedule hour');
const scheduleTime = $('div.schedule-time');

function componentProgramTime(program) {
  const bgColor = program.style.getPropertyValue('background-color');
  const txtColor = program.style.getPropertyValue('color');
  const hourSelected = program.innerHTML;

  scheduleTime.css('background-color', bgColor);
  $('.schedule-time p.hour').css('color', txtColor);

  $('.schedule-time p span').text(hourSelected.substring(0,2));
  $('.schedule-time p.hour').text(hourSelected);
}

for (let btn of btnHour) {
  if (btn.getAttribute('class') == 'hour-shedule hour hour-now') {
    componentProgramTime(btn);
  }

  $(btn).click(function() {
    componentProgramTime(btn);
  });
}
