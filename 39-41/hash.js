//获得hash
function hash(){
    var value=location.hash.replace("#","").split(",");
    return value;
   
}
//渲染hash
function usehash(){
    var value=hash()
    var productArr=[],regionArr=[];
    var regionSelect=document.getElementById("region-radio-wrapper");
    var productSelect=document.getElementById("product-radio-wrapper");
          
        for (var i in value) {   
            for (var a in regionSelectData) {
                if (value[i]==regionSelectData[a].text) {
                     regionArr.push(value[i]);
                }
            }   
            for (var a in productSelectData) {
                if (value[i]==productSelectData[a].text) {
                    productArr.push(value[i]);
                }
            }    
        }   

    for ( i = 0; i <productSelect.childNodes.length; i+=2) {
        productSelect.childNodes[i].checked=false;
        for (var a=0;a<productArr.length;a++) {
        
            if (productSelect.childNodes[i].value==productArr[a]) {
                productSelect.childNodes[i].checked=true;                       
            }         
        }
    } 
    if (productSelect.childNodes[2].checked==true&&
        productSelect.childNodes[4].checked==true&&
        productSelect.childNodes[6].checked==true) {
        productSelect.childNodes[0].checked=true;
    }   
    for (var i = 0; i <regionSelect.childNodes.length; i+=2) {
        regionSelect.childNodes[i].checked=false;
        for (var a=0;a<regionArr.length;a++) {

            if (regionSelect.childNodes[i].value==regionArr[a]) {
                 regionSelect.childNodes[i].checked=true;   
            }
        }    
    }
    if (regionSelect.childNodes[2].checked==true&&
        regionSelect.childNodes[4].checked==true&&
        regionSelect.childNodes[6].checked==true) {
        regionSelect.childNodes[0].checked=true;
    }
}
//设置新的hash
var body=document.getElementsByTagName("body")[0];
body.onchange=function(){
    var parr=[],rarr=[];allarr=[];
    var checked=document.getElementsByTagName("input");

    for (var i in checked) {
        if (checked[i].checked==true) {
            for (var a in regionSelectData) {
                if (checked[i].value==regionSelectData[a].text) {
                    rarr.push(checked[i].value);
                }
            }   
            for (var a in productSelectData) {
                if (checked[i].value==productSelectData[a].text) {
                    parr.push(checked[i].value);
                }
            }
        }    
    }
    allarr=parr.concat(rarr);
    location.hash=allarr
    console.log(location.hash);

    
}
