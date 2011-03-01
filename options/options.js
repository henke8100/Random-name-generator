var current="tab1";

$(document).ready(function(){
	$(".menuitem").mouseover(function (){
		$(this).css('background', 'rgba(150,150,150,0.5)');
	});
	$(".menuitem").mouseout(function (){
		$(this).css('background', 'rgba(150,150,150,0.2)');
	});
	$(".menuitem").click(function (){
		$(this).css('background', 'rgba(150,150,150,0.8)');
		page(this);
	});
});

function page(t){
	if(t.id!=current){
		$("#"+current+"c").slideUp();
		$("#"+t.id+"c").slideDown();
		current=t.id;
	}
}
