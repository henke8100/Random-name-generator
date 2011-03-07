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
	
	$(function() {
		$("#slider-range").slider({
			range:true,
			min:1,
			max:20,
			values:[2,8],
			slide:function(event,ui){
				$("#length").html(ui.values[0]+" - "+ui.values[1]);
			}
		});
		$("#length").html($("#slider-range").slider("values",0)+" - "+$("#slider-range").slider("values",1));
	});
});

function page(t){
	if(t.id!=current){
		$("#"+current+"c").slideUp();
		$("#"+t.id+"c").slideDown();
		current=t.id;
	}
}