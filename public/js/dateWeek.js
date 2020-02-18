function dateDayWeek() {
  var now = new Date();
  var weekday = new Array(7);
    weekday[0] = "Domingo";
    weekday[1] = "Segunda";
    weekday[2] = "Terça";
    weekday[3] = "Quarta";
    weekday[4] = "Quinta";
    weekday[5] = "Sexta";
    weekday[6] = "Sábado";
  var week = weekday[now.getDay()];
  document.getElementById("console-date-day-week").innerHTML = "<p>" + week + " " + now.getDate() + "</p>";
  var t = setTimeout(startTime, 86400000);
}

dateDayWeek();

function startTime() {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();

  h = checkTime(h);
  m = checkTime(m);

  document.getElementById("console-time-now").innerHTML = h + ":" + m;

  var t = setTimeout(startTime, 1000);

  if (m == '00' && time.getSeconds() == 0) {
    document.location.reload(true);
  }
}

function checkTime(i) {
  if (i < 10) {i = '0' + i};
  return i;
}
