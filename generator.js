function rName(special)
{
	chars="ABCDEFGHIJKLMNOPQRSTUVXYZ";
	vowels="aeiouy";
	consonants="bcdefghjklmnpqrstvxyz";
	n=Math.floor(Math.random()*chars.length);
	part1=chars.substring(n,n+1);
	n=Math.floor(Math.random()*vowels.length);
	part2=vowels.substring(n,n+1);
	part3="";
	nr=1;
	if(isNaN(parseInt(localStorage["minlength"])))
		localStorage["minlength"]=2;
	if(isNaN(parseInt(localStorage["maxlength"])))
		localStorage["maxlength"]=8;
	minVal=parseInt(localStorage["minlength"]);
	maxVal=parseInt(localStorage["maxlength"])+1;
	length=parseInt(Math.floor((maxVal-minVal)*Math.random()))+minVal;
	while(length-1!=nr)
	{
		nr++;
		if(nr%2==0)
		{
			n=Math.floor(Math.random()*consonants.length);
			part3+=consonants.substring(n,n+1);
		}
		else
		{
			n=Math.floor(Math.random()*vowels.length);
			part3+=vowels.substring(n,n+1);
		}
	}
	name=part1+part2+part3;
	if(special)
		chrome.tabs.executeScript(null,{code:"document.activeElement.value+='"+name+"';"})
	else
		return name;
}