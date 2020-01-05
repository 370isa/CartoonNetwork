var i;
var cont = 0;
var hour;
nowHours();
for (i = 0; i < 24; i++){
	if (i < 10) {i = "0" + i;}
	
	document.write("<button onclick='tableHour(" + i + ");' type='button' name='" + i + "' class='hour-shedule hour hour" + i + "'>" + i + "h</button>");
	
	if (i === hour) {
		jQuery( "button.hour-shedule.hour.hour" + i ).toggleClass( "nowHour" );
	}
}
document.write("<button type='button' class='hour-shedule hour-next'><a href='#'>></a></button>");

jQuery( "button.hour-shedule.hour" ).click(function() {
    jQuery( this ).toggleClass( "active" );
	jQuery( "#schedule-hour" ).toggleClass( "active" );
});

function tableHour(i) {
	if (i < 10) {i = "0" + i;}
	document.querySelector('#schedule-per-hour .schedule-per-hour .section-hour h1').innerHTML = i + "h";
	document.querySelector('div#schedule-hour div#schedule-per-hour button#section .section div#hour p.hour.h1').innerHTML = i + ":00";
	document.querySelector('div#schedule-hour div#schedule-per-hour button#section .section div#hour p.hour.h2').innerHTML = i + ":15";
	document.querySelector('div#schedule-hour div#schedule-per-hour button#section .section div#hour p.hour.h3').innerHTML = i + ":30";
	document.querySelector('div#schedule-hour div#schedule-per-hour button#section .section div#hour p.hour.h4').innerHTML = i + ":45";
}

function nowHours() {
	hour = new Date();
	this.hour = hour.getHours();
	if (this.hour < 10) {this.hour = "0" + this.hour};
	var t = setTimeout(nowHours, 500);
}