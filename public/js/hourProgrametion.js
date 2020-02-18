const scheduleHour = $('.container .schedule-hour');

function convertToTen(time) {
	return (time < 10) ? '0' + time : time;
}

function bgColorButtonHour(position) {
	return (position == 0 || position%3 == 0) ? '#009ade' :
		(position == 1 || position%3 == 1) ? '#ec0080' : '#ffea00';
}

function addButtonHour(parmClass, classHour, numColor, color, hour) {
	return $(parmClass).append("<button type='button' " +
	"class='hour-shedule " + classHour + "' " +
	"style='background-color: " + numColor + "; color: " + color + ";'>" + hour
	+ "</button>");
}

var hour = new Date().getHours();
hour = convertToTen(hour);

var numColor, colorHour, classHour;

for (let i = 0; i < 24; i++){
	colorHour = bgColorButtonHour(i);
	i = convertToTen(i);

	if (i === hour) {
		classHour = 'hour hour-now';
		numColor = colorHour;
		colorHour = '#000'
	} else {
		classHour = 'hour';
		numColor = '#fff';
	}

	addButtonHour(scheduleHour, classHour, colorHour, numColor, i + 'h');
}

addButtonHour(scheduleHour, 'next-day', 'white', 'transparent', '&gt;');
