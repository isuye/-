function editTd(event){
    var dom=event.target;
    console.log(dom);
    var oldValue=dom.innerHTML;
    
    img=document.createElement("img");
    img.setAttribute("src","./01.jpg");
    dom.appendChild(img);
//点击图片进入编辑模式
    img.onclick=function(){
        dom.innerHTML="";
        var input=document.createElement("input");
            input.setAttribute("type","text");
            input.setAttribute("value",oldValue)        
        dom.appendChild(input);

        var btn1=document.createElement("button");
            btn1.innerHTML="确认";
        var btn2=document.createElement("button");
            btn2.innerHTML="取消";
        dom.appendChild(btn1);
        dom.appendChild(btn2);

        //点击取消返回展示框
        btn2.onclick=function(){
            btn1.parentNode.removeChild(btn1);
            btn2.parentNode.removeChild(btn2);
            input.parentNode.removeChild(input);
            dom.innerHTML=oldValue;
        }
        //点击确认返回展示框,并修改数据
         btn1.onclick=function(){
            var inValue=input.value;
            btn1.parentNode.removeChild(btn1);
            btn2.parentNode.removeChild(btn2);
            input.parentNode.removeChild(input);
            dom.innerHTML=inValue;
             
            saveData(dom);
        }
   }
}
//利用localStorige存储数据
function saveData(dom){
    
    var localData;
    if (localStorage.localData!=null) {
        localData=JSON.parse(localStorage.localData);
    }
    else{
        localData=sourceData;
    }

    var changeSaleArr=[];//存储返回的sale数据
    var tr=dom.parentNode.childNodes;
    console.log(tr[0].innerText);

    for (var i =2;i<tr.length;i++) {
        changeSaleArr.push(tr[i].innerText)
    }
    
    for (var i in localData) {
        if (tr[0].innerText==localData[i].product&&
            tr[1].innerText==localData[i].region) {
            localData[i].sale=changeSaleArr
        }
    }
    console.log(localData);
    //console.log();
    console.log(localStorage);
    localStorage.localData=JSON.stringify(localData);
    
}
