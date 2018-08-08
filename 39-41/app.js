

var regionSelect=document.getElementById("region-radio-wrapper");
var productSelect=document.getElementById("product-radio-wrapper");
var tableDiv=document.getElementById("table-wrapper");

var barGraph=document.getElementById("bar-graph");
var brokenLineGraph=document.getElementById("broken-line-graph");

window.onload=function(){newtable();barGrapg();lineGraph()};

//生成选择框
checkedbox(regionSelect,regionSelectData);
checkedbox(productSelect,productSelectData);

window.onhashchange=usehash;
usehash();

regionSelect.addEventListener("click",checkboxAll);//监听复选框事件
regionSelect.addEventListener("click",newtable);//监听表格生成
regionSelect.addEventListener("click",barGrapg);//监听柱状图生成
regionSelect.addEventListener("click",lineGraph);//监听折线图生成


productSelect.addEventListener("click",checkboxAll);
productSelect.addEventListener("click",newtable);
productSelect.addEventListener("click",barGrapg);
productSelect.addEventListener("click",lineGraph);

    
   
//数据修改
tableDiv.onclick=function(){ 
   
   var imgNumber=tableDiv.innerHTML.search("img"); 

    if (event.target.tagName=="TD"&&
        event.target.cellIndex!=0&&
        event.target.cellIndex!=1&&
        imgNumber==-1) {

        editTd(event);                             
    }
    if (imgNumber>-1) {
        tableDiv.innerHTML=tableDiv.innerHTML.replace('<img src="./01.jpg">'," ");
            
    }
} 






