//根据选项生成表格/先清空表格,在生成新表格

//清空表格展示区
function clearTable(){
    tableDiv.innerHTML="";
}

function newtable(){
    clearTable();
    var selectData;
   //判断localStorage是否有数据,有就先调用
    if (localStorage.localData!=null) {
        selectData=getData(JSON.parse(localStorage.localData));
    }
    else{
        selectData=getData(sourceData);
    }
    //输出表格
    var table=document.createElement("table");
    tableDiv.appendChild(table);
    
    var tr1=document.createElement("tr");
    table.appendChild(tr1);

    //表头
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    th1.innerText="商品";
    th2.innerText="地区"
    tr1.appendChild(th1);
    tr1.appendChild(th2);

    for (var i = 1; i<=12; i++) {
        var th=document.createElement("th");
        th.innerText=i+"月";
        tr1.appendChild(th);
    }
   //输出每行数据
    for (var i=0;i<selectData.length;i++) {
        var tr2=document.createElement("tr");
        table.appendChild(tr2);

        var td1=document.createElement("td");
        td1.innerText=selectData[i].product;
        tr2.appendChild(td1);


        var td2=document.createElement("td");
        td2.innerText=selectData[i].region;
        tr2.appendChild(td2);
        for (var a = 0; a < selectData[i].sale.length; a++) {
            var td3=document.createElement("td");
            td3.innerText=selectData[i].sale[a];
            tr2.appendChild(td3);
        }
    }
    mergeTable(1);   
}

//多选的表格合并:判断i和i+1行第一列是否相同,
//相同则添加rowSpan,并且影藏i+1第一列的数据
function mergeTable(n){
    var tr=tableDiv.childNodes[0].childNodes
    for (var i = n; i <tr.length-1; i++) {
        if (tr[n].childNodes[0].innerHTML==tr[i+1].childNodes[0].innerHTML) {          
            tr[i+1].childNodes[0].style.display="none";
            tr[n].childNodes[0].rowSpan+=1;
        }
        else{
            mergeTable(i+1);
        }       
    }
}