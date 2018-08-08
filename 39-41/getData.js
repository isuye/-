
//根据选择筛选出数据放入datactArr
function getData(data){
    var regionArr=[];
    var productArr=[];
    var dataArr=[]
  
    
 



        for (var i = 2; i <regionSelect.childNodes.length; i+=2) {
            if (regionSelect.childNodes[i].checked==true) {
                regionArr.push(regionSelect.childNodes[i].value)
            }
            if (productSelect.childNodes[i].checked==true) {
                productArr.push(productSelect.childNodes[i].value)
            }
        }

    /*if (regionArr.length==1&&productArr.length==1) {
        console.log("都只选一个");
        for (var i in data) {
            if (data[i].region==regionArr[0]&&data[i].product==productArr[0]) {
                dataArr.push(data[i]);
            }
        }
    }
    if (regionArr.length==1&&productArr.length>1) {
        console.log("地区一个,产品多选");
        for (var i in data) {
            for (var b in productArr) {
                if (data[i].region==regionArr[0]&&data[i].product==productArr[b]) {
                    dataArr.push(data[i]);
                }
            }
            
        }
    }
    if (regionArr.length>1&&productArr.length==1) {
        console.log("产品一个,地区多选");
        for (var i in data) {
            for (var b in regionArr) {
                if (data[i].product==productArr[0]&&data[i].region==regionArr[b]) {
                    dataArr.push(data[i]);
                }
            }          
        }
    }
    if (regionArr.length>=1&&productArr.length>=1) {
        console.log("产品,地区都多选");
    }*/
    //如果hash里面有数据,先取用
   

       for (var i in data) {
            for (var b in regionArr) {
                for (var c in productArr) {         
                    if (data[i].product==productArr[c]&&data[i].region==regionArr[b]) {
                        dataArr.push(data[i]);
                    }   
                }
            }    
        }

    //console.log(dataArr);
    return dataArr;
}