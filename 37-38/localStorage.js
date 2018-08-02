//用localStorage存储修改后的数据
function localSave(dom){
 //初始化saveData
var saveData=sourceData;
 //获得更改后的数据
 var updataSale=[];
 var table=document.getElementById("table-wrapper").childNodes;
 var tr= dom.parentNode.childNodes;
for (var a = 1; a < tr.length; a++) {
	updataSale.push([]);
	
	for (var i =  2; i <14; i++) {
		updataSale[a-1].push(tr[i].innerHTML)
	}
}
for (var i = 0; i < saveData.length; i++) {
	for (var a = 1; a < tr.length; a++) {
		if (saveData[i].product==tr[1].innerHTML&&saveData[i].region==tr[0].innerHTML) {
			saveData[i].sale=updataSale[a-1];
		}
	}	
}


localStorage.setItem('localData',JSON.stringify(saveData));	
 

 console.log(saveData[0].region);  
  console.log(tr[1].childNodes[0].innerHTML);  
console.log(saveData);  
console.log(localStorage); 
//console.log(JSON.parse(window.localStorage.saveData));      


}















