var hour = new Date().getHours();

for (let i = 0; i < 24; i++){
	if (i === hour) {
		if (i < 10) {
			i = '0' + i;
		}

		document.write("<button type='button' name='hour-" + i + "' class='hour-shedule hour-now hour" + i + "'>" + i + "h</button>");
	} else {
		document.write("<button type='button' name='hour-" + i + "' class='hour-shedule hour hour" + i + "'>" + i + "h</button>");
	}
}

document.write("<button type='button' class='hour-shedule hour-next'>&gt;</button>");
