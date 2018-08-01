function histogram(data){
	var svg=document.getElementById("svgCont");
	var text="";
	var max=maxValue(data);	
	var strX=40;
	var endX=460;
	var strY=40;
	var endY=360;
	
	text += '<text font-size="20" x=220 y="30">'+"华北手机销售情况柱状图"+'</text>';
	text += '<line x1="40" y1="360 "x2="500"  y2="360" stroke="black" stroke-width="2" />';//x轴
    text += '<line x1="40" y1="360" x2="40"  y2="40" stroke="black" stroke-width="2"/>'//y轴
    
	for (var i =0;i<=data.length-1;i++) {																			//柱状图和月份	
		var x=50+(i*36);
		var y=(300/max)*data[i];
		var sy=360-y;
		var z=Number(i)+1;
		text += '<rect x='+x+' y='+sy+' width="15" height='+y+' style="fill:blue;stroke:black;stroke-width:1;"/>'
		text += '<text font-size="10" x='+x+' y="380">'+z+"月"+'</text>';
	}

	for (var i = 1; i <= 6; i++) {
		var x=360-i*50;
		var y=max/6*i
		text += '<line x1="40" y1='+x+' x2="800"   y2='+x+' stroke="blue" stroke-width="1" stroke-opacity:"0.1" />';
		text += '<text font-size="1" x="15" y='+x+'>'+Math.round(y)+'</text>';
	}
	svg.innerHTML=text;
}
function maxValue(data){
	var max=Number(data[0]);
	for (var i = 1; i <data.length; i++) {
		if (max<Number(data[i])) {
			max=Number(data[i]);
		}
	}	
	return max;
}