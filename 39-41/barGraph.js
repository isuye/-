function barGrapg(){
	var selectData;
	var color=["#00FF00","#00868B","#54FF9F","#CDCD00","#8B658B","#EE2C2C","#D1EEEE","#00BFFF","#8B7D7B"];
	//判断localStorage是否有数据,有就先调用


    if (localStorage.localData!=null) {
	        selectData=getData(JSON.parse(localStorage.localData));
	    }
	    else{
	        selectData=getData(sourceData);
	    }
  
    var maxdata=maxData();//取得最大值
    var barSvg=document.getElementById("barSVG");
 
    var strx=30,stry=50,endx=550,endy=350;
    text="";
    barSvg.innerHTML=text;//清空图表
    text+='<text x="200" y="15" fill="black">销售数据柱状图</text>'
    text+='<line x1='+strx+' y1='+endy+' x2='+endx+' y2='+endy+' style="stroke:black;stroke-width:1"/>'//x轴
    text+='<line x1='+strx+' y1='+stry+' x2='+strx+' y2='+endy+' style="stroke:black;stroke-width:1"/>'//y轴
    //切割线
    text+='<g fill="none" stroke="#1E90FF" stroke-width="1"  opacity="0.4" > '
    for (var i = 1; i <7; i++) {
    	var y=(endy-stry)/6*i;
    	var y2=endy-y+5;    	
    	text+= '<path stroke-dasharray="4,4" d="M '+strx+' '+y+' L '+endx+' '+y+'" />'
    	text+='<text x='+(strx-25)+' y='+y2+' stroke="black" font-size="1" opacity="1">'+Math.round((maxdata/6*i))+'</text>'
    }
    text+='</g>'
    //月份
    
   
    for (var i = 1; i <= 12; i++) {
    	var x=(endx-strx)/12*i
    	var x2=x/selectData.length;
    	text+='<text x='+(x)+' y='+(endy+15)+' fill="black" font-size="1">'+i+'月</text>';
    	text+='<line x1='+(x+30)+' y1="340" x2='+(x+30)+' y2='+endy+' style="stroke:black;stroke-width:1"/>'
    }

      	 
   //柱状图
    for (var i =0;i<selectData.length;i++) {	
    	 for (var a=0;a<12;a++) {	
    		var b=selectData.length;
    		var y=300/maxdata*selectData[i].sale[a];
    		var x=(endx-strx)/12/b;   		
    		text+='<rect x='+(30+x*b*a+(x*i))+' y='+(endy-y)+' width='+(x-2)+' height='+y+' style="fill:'+color[i]+';stroke:black;stroke-width:1;"/>'
    	}
    }
    //颜色分类
    
    for (var i =0;i<selectData.length;i++) {

    	text+='<rect x="520" y='+(13+i*20)+'   width="5" height="5" style="fill:'+color[i]+';stroke:black;stroke-width:0.5;"/>'
    	text+='<text x="530" y='+(20+i*20)+'  fill="black" font-size="0.5">'+selectData[i].region+selectData[i].product+'</text>';
    }


    barSvg.innerHTML+=text
}
//取得展示table中最大值
function maxData(){
	var tdall=[]=document.getElementsByTagName("td")
	var tdArr=[];

	
	for (var i in tdall) {
		if (isNaN(tdall[i].innerHTML)==false) {
		tdArr.push(tdall[i].innerHTML)}
	}

	var maxTd=tdArr[0];

	for (var i =0;i<tdArr.length;i++) {
		if (maxTd<Number(tdArr[i])) {
			maxTd=tdArr[i];
		}
	}
    //console.log(maxTd);
	return maxTd;
}
