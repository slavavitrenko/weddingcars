$(document).on("click", ".modal-btn", function(){
	var button = $(this);
	$('#modal-content').load(button.attr('value'));
	$('span#modal-header').html(button.attr('data-modal-header'));
	$('#modal-view').modal('show');
});