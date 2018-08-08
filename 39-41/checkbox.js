//生成多选框
//container生成多选框的容器
//checkedboxObj多选数据
function checkedbox(container,checkedboxObj){			//初始化所有选框被选
	var checkAll=document.createElement("input");
	    checkAll.checked=true;				
		checkAll.setAttribute("type","checkbox");
		checkAll.setAttribute("checkbox-type","all");
		var allNode=document.createTextNode("全选");

	container.appendChild(checkAll);
	container.appendChild(allNode);

	for (var i in checkedboxObj) {
		var checkList=document.createElement("input");
		    checkList.checked=true;
			checkList.setAttribute("type","checkbox");
			checkList.setAttribute("checkbox-type","son");
			checkList.setAttribute("value",checkedboxObj[i].text);
			//checkList.setAttribute("text",checkedboxObj[i].text);
		var listNode=document.createTextNode(checkedboxObj[i].text);

		container.appendChild(checkList);
		container.appendChild(listNode);
	}

}

//监听全选框事件
function checkboxAll(){
	target=event.target;
	var parent=target.parentNode
	var checkboxType=target.getAttribute("checkbox-type");
 

    var allN=0;												//监控有几个check被选
    for (var i = 2;i<parent.childNodes.length;i+=2) {
    	if (parent.childNodes[i].checked==true) {
    		allN++;
    	}
    }


    if (checkboxType=="all") {
    	for (var i = 2;i<parent.childNodes.length;i+=2) {
    		parent.childNodes[i].checked=true;
    	}
    	return;
    }

    if (checkboxType=="son") {}{
    	parent.childNodes[0].checked=false; 				//取消任一全选框取消
    	if (allN==0) {										//至少保留一个子选框
    		target.checked=true;
    	}
    	if (allN==3) {										//如果子选框全被选择,全选也被选择
    		parent.childNodes[0].checked=true;
    	}
    }
   
  	
}
