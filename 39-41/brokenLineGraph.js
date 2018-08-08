function lineGraph(){
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
   
 
    var strx=30,stry=50,endx=550,endy=350;

  
    var ctx = document.getElementById("canvas").getContext("2d");
    document.getElementById("canvas").height=document.getElementById("canvas").height;//清空画布
    //x,y轴
    ctx.beginPath();
    //ctx.strokeStyle ="black"; 
    ctx.moveTo(strx,endy);
    ctx.lineTo(endx,endy);
    ctx.moveTo(strx,endy);
    ctx.lineTo(strx,stry);
    ctx.stroke();
//   
    //ctx.font = "10px  Courier New";
    ctx.strokeText("销售数据折线图",250,20);
    //月份
   
    for (var i = 1; i <= 12; i++) {
        var x=(endx-strx)/12*i
        var x2=x/selectData.length;
        ctx.strokeText(i+"月",x,(endy+15));
    }
    //颜色分类
    for (var i =0;i<selectData.length;i++) {
        ctx.fillStyle=color[i];
        ctx.fillRect(520,(13+i*20),5,5);

        ctx.strokeText(selectData[i].region+selectData[i].product,530,(20+i*20));
        
    }
    //折线图
       for (var i =0;i<selectData.length;i++) { 
         ctx.beginPath();
         ctx.strokeStyle =color[i];

         for (var a=0;a<12;a++) {   
            var b=selectData.length;
            var y=300/maxdata*selectData[i].sale[a];
            var x=(endx-strx)/12/b;    
            ctx.arc((50+x*b*a),(endy-y),3,0,Math.PI*2,true); 

        }
         ctx.stroke();
    }




    //分割线
    for (var i = 1; i <7; i++) {
        var y=(endy-stry)/6*i;
        var y2=endy-y+5;  

        ctx.beginPath();
        //ctx.setLineDash([0,0]);
        ctx.strokeStyle ="black"; 
        ctx.strokeText(Math.round((maxdata/6*i)),10,y2);
        ctx.stroke();

        ctx.beginPath();
        //ctx.setLineDash([4,4]);
        ctx.strokeStyle = 'rgba(30, 144, 255, 0.4)'; 

       
        ctx.moveTo(strx, y);
        ctx.lineTo(endx, y);
        ctx.stroke();
   
   }    
}