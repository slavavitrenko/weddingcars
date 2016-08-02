$(document).ready(function(){
	$('a[data-method="post"]').on("click", function(){
		$.post($(this).attr('href'));
	});
	$('button[data-href*="/"]').on("click", function(){
		window.location = $(this).attr('data-href');
	})
});