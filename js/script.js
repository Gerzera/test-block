	$( ".slide__one" ).click(function() {
    $(".slide__one_text").slideToggle( "fast" );
    $( ".slide__two_text" ).slideUp( "fast" );
});

	$( ".slide__two" ).click(function() {
	$( ".slide__two_text" ).slideToggle( "fast" );
	$( ".slide__one_text" ).slideUp( "fast" );
});
	$( ".close_log" ).on('click', function() {
		$("#giftLog").val('');
	});

	$( ".close_pass" ).on('click', function() {
		$("#giftPass").val('');
	});