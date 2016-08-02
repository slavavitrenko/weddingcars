// Showing modal by clicking on .modal-btn (scope: window)
$(document).on("click", ".modal-btn", function(){
	var button = $(this);
	$('#modal-content').load(button.attr('value'));
	$('span#modal-header').html(button.attr('data-modal-header'));
	$('#modal-view').modal('show');
});

// Pjax buttons with reloading pjax container if query is success (scope: window)
$(document).on("click", ".pjax-btn", function(){
	var button = $(this);
	$.get(
		button.attr("value"),
		function(data){
			if(data == 1){
				$.pjax.reload({container: "#" + button.attr("data-container")});
			}
		});
});

var collapse = localStorage.getItem('collapse-menu');
if(collapse == 1){
	$('body').addClass('sidebar-collapse');
}

$(document).on('click', '.sidebar-toggle', function(){
	if($('body').hasClass('sidebar-collapse')){
		localStorage.setItem('collapse-menu', '0');
	}
	else{
		localStorage.setItem('collapse-menu', '1');
	}
});