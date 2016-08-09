$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '580px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
	});

	$(document).keydown(function(x) {
		if (x.keycode==88);
		$('.ryu-still').hide();
		$('ryu-ready').hide();
		$('ryu-throwing').hide();
		$('.ryu-cool').show();

	});
	
});

var keydownCounter=88
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}