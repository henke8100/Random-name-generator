window.onload=setInterval(scroll,500);
window.onload=init;
var timer;
var namenr=0;
function init()
{
	if(isNaN(parseInt(localStorage["minlength"])))
		localStorage["minlength"]=2;
	if(isNaN(parseInt(localStorage["maxlength"])))
		localStorage["maxlength"]=8;
	document.getElementById("minlength").value=localStorage["minlength"];
	document.getElementById("maxlength").value=localStorage["maxlength"];
	for (i=0;i<=25;i++)
	{
		scroll();
	}
}
function scroll()
{
	name=rName(false);
	element=document.createElement("div");
	element.innerHTML=name;
	namenr++;
	element.id="name"+namenr;
	document.getElementById("namescroller").appendChild(element);
	eid="";
	eid="name"+(namenr-26).toString();
	element=document.getElementById(eid);
	if(element)
		document.getElementById("namescroller").removeChild(element);
}
function nosaved()
{
	document.getElementById("savedmin").innerText="";
	document.getElementById("savedmax").innerText="";
}
function save()
{
	minlength=parseInt(document.getElementById("minlength").value);
	maxlength=parseInt(document.getElementById("maxlength").value);
	if(isNaN(minlength)) minlength="2";
	if(isNaN(maxlength)) maxlength="8";
	if(minlength<2)
		minlength="2";
	if(minlength>maxlength)
		maxlength=minlength;
	localStorage["minlength"]=minlength;
	localStorage["maxlength"]=maxlength;
	document.getElementById("minlength").value=minlength;
	document.getElementById("maxlength").value=maxlength;
	document.getElementById("savedmin").innerText="Saved.";
	document.getElementById("savedmax").innerText="Saved.";
	clearTimeout(timer);
	timer=setTimeout(nosaved,2000);
	for (i=0;i<=25;i++)
	{
		scroll();
	}
}