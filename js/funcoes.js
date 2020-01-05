function sheduleHour() {
	$( "button.hour-shedule.hour" ).click(function() {
        $( "div#schedule-hour div#schedule-per-hour" ).toggleClass( "selected" );
    });
}

function openPopupAnime() {
	document.getElementById("popupAnime").style.display = 'flex';
}

function closePopupAnime() {
	document.getElementById("popupAnime").style.display = 'none';
}

function openAnimeDescri() {
	document.getElementById("popupAnimeDescri").style.display = 'flex';
}

function closeAnimeDescri() {
	document.getElementById("popupAnimeDescri").style.display = 'none';
}