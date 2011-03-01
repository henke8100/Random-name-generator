$(document).ready(function(){
	$(".menuitem").mouseover(function (){
		$(this).css('background', 'rgba(150,150,150,0.5)');
	});
	$(".menuitem").mouseout(function (){
		$(this).css('background', 'rgba(150,150,150,0.2)');
	});
});
