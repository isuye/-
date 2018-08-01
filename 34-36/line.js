function draw(data){

	
	var ctx = document.getElementById('canvas').getContext('2d');
	var max=maxValue(data);

	var strX=40;
	var endX=460;
	var strY=360;
	var endY=40;

	//ctx.clearRect(0,0,500,500);
	
 	ctx.beginPath();    //x轴
 	ctx.moveTo(strX,strY);
 	ctx.lineTo(endX,strY);
 	ctx.closePath();
 	ctx.stroke()

    ctx.beginPath();    //y轴
    ctx.moveTo(strX,strY);
    ctx.lineTo(strX,endY);
    ctx.closePath();
    ctx.stroke()
	for (var i =0;i<=data.length-1;i++) {
		var x=50+(i*36);
		var y=(300/max)*data[i];
		var sy=360-y;
		var z=Number(i)+1;
		var x2=50+(z*36);
    	var y2=360-(300/max)*data[z];

    	ctx.beginPath();
    	ctx.arc(x,sy,3,0,Math.PI*2,true);
    	ctx.fillStyle ="red";
    	ctx.fill();

   	    
   	    ctx.beginPath();  //
   	    ctx.strokeStyle="#0000ff"; 
  		ctx.moveTo(x,sy);
  		ctx.lineTo(x2,y2);	
  		ctx.closePath();
  		ctx.stroke();
   	    
  		ctx.fillText(z+'月',x,380)
    }
    for (var i = 1; i <= 6; i++) {
    	var x=360-i*50;
		var y=max/6*i

    	ctx.beginPath(); 
    	ctx.strokeStyle="red"; 
    	ctx.globalAlpha = 0.1;
  		ctx.moveTo(strX,x);
  		ctx.lineTo(endX,x);
  		ctx.closePath();
  		ctx.stroke()

  		ctx.beginPath(); 
  		ctx.fillStyle = '#277DF4';
        ctx.globalAlpha = 1;
  		ctx.fillText(Math.round(y),15,x)
  		ctx.stroke()
    }   
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