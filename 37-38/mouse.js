
/*function eachTD(){
var table=document.getElementById("table-wrapper")
var tr=table.childNodes[0].childNodes;
console.log(tr[1].childNodes[13])
for (let i = 1; i<tr.length; i++) {
	for (let a=2; a<14;a++) {
			

		var newtd=tr[i].childNodes[a];

        var img=document.createElement("img");

		tr[i].childNodes[a].onmouseover=function(){
			this.style.background='#BBFFFF';
			
			img.setAttribute("src","http://bpic.588ku.com/element_origin_min_pic/18/06/10/1ab0d8707edaf86caf9da9283abf7abf.jpg");
			img.setAttribute("width","30px");
			img.setAttribute("height","30px");
			this.appendChild(img);



			img.onclick=function(){
			console.log("aaa")

			oldValue=newtd.innerHTML;
			newtd.innerHTML="";
			var inputHtml=document.createElement("input");
			inputHtml.setAttribute("type","text");
       		inputHtml.setAttribute("value",oldValue);
       		newtd.appendChild(inputHtml);

       		var saveBtn=document.createElement("button");
       		saveBtn.innerHTML="保存";
       		newtd.appendChild(saveBtn);

       		var cancelBtn=document.createElement("button");
       		cancelBtn.innerHTML="取消";
       		newtd.appendChild(cancelBtn);

       		cancelBtn.onclick=function(){
       			
			cancelBtn.parentNode.removeChild(cancelBtn);
			saveBtn.parentNode.removeChild(saveBtn);
       	   
       			}

       	};

		}
		tr[i].childNodes[a].onmouseout =function(){
			this.style.background='white';
			
		}


	}
	
}



}	*/


var div = document.getElementById("table-wrapper");
div.onclick= function(){
    if(event.target.tagName == "TD") edit(event);
}
function edit(event){
    
    var dom = event.target;
    var img=document.createElement("img");
    img.setAttribute("src","http://bpic.588ku.com/element_origin_min_pic/18/06/10/1ab0d8707edaf86caf9da9283abf7abf.jpg");
	img.setAttribute("width","30px");
	img.setAttribute("height","30px");
	dom.style.background='#BBFFFF';
    dom.appendChild(img);
    

    img.onclick = function(){
        dom.removeChild(img);//方便下一步取innerHTML
        var oldValue = dom.innerHTML;
        dom.innerHTML = "";
        var inputHtml = document.createElement("input");
        inputHtml.setAttribute("type","text");
        inputHtml.setAttribute("value",oldValue);
        inputHtml.style.height="100%";
        inputHtml.style.width ="30px";
        dom.appendChild(inputHtml);
        inputHtml.focus();//使光标在输入框内
        inputHtml.select();//默认选择内容
        var saveBtn = document.createElement("button");
        saveBtn.innerHTML = "保存";
        saveBtn.style.color = "gray";
        dom.appendChild(saveBtn);
        var cancelBtn = document.createElement("button");
        cancelBtn.innerHTML = "取消";
        cancelBtn.style.color = "gray";
        dom.appendChild(cancelBtn);
        cancelBtn.onclick = function(){//点击取消时恢复原来数值
            dom.removeChild(saveBtn);
            dom.removeChild(cancelBtn);
            dom.innerHTML = oldValue;
        }
        saveBtn.onclick = function(){
            var newValue = inputHtml.value;
            if(isNaN(newValue) || newValue == ""){
                alert("请输入数字！");
                return;
            }
            dom.innerHTML = newValue;
            localSave(dom);
        }               
    }   

		
   

}   

		