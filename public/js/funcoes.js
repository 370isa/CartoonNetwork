function sheduleHour() {
	$( "button.hour-shedule.hour" ).click(function() {
		$( "div#schedule-hour div#schedule-per-hour" ).toggleClass( "selected" );
	});
}

function openPopupAnime() {
	setDisplayProperty($("#popupAnime"), 'flex');
}

function closePopupAnime() {
	setDisplayProperty($("#popupAnime"), 'none');
}

function openAnimeDescri() {
	setDisplayProperty($("#popupAnimeDescri"), 'flex');
}

function closeAnimeDescri() {
	setDisplayProperty($("#popupAnimeDescri"), 'none');
}

function setDisplayProperty(element, displayValue) {
	element.css('display', displayValue);
}
