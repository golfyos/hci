var idar = ["107-800930","107-9301100","107-11001230","107-13301500","107-15001630","107-16301800",
                "111-800930","111-9301100","111-11001230","111-13301500","111-15001630","111-16301800",
                "213-800930","213-9301100","213-11001230","213-13301500","213-15001630","213-16301800",
                "3011-800930","3011-9301100","3011-11001230","3011-13301500","3011-15001630","3011-16301800",
                "3012-800930","3012-9301100","3012-11001230","3012-13301500","3012-15001630","3012-16301800",
                "3013-800930","3013-9301100","3013-11001230","3013-13301500","3013-15001630","3013-16301800",
                "304-800930","304-9301100","304-11001230","304-13301500","304-15001630","304-16301800",
                "r1-800930","r1-9301100","r1-11001230","r1-13301500","r1-15001630","r1-16301800",
                "r2-800930","r2-9301100","r2-11001230","r2-13301500","r2-15001630","r2-16301800"
                ];    
var tem1 = [];
function setData(){
    var mydata = JSON.parse(data);
    for(var i=0;i<54;i++){
        if($("#"+idar[i]).val()=="ticked"){
            tem1.push(idar[i]);
        }
    }

   

 
    for(var j=0;j<tem1.length;j++){
        for(var i=0;i<54;i++){
            
            if(mydata[i].id==tem1[j]){
                
               
                data[i].status="cantTick";
            }
        }
    }
    



}

function getData(){
    //alert(tem1.length);
    for(var i=0;i<tem1.length;i++){
        //alert(tem1[1]);
    }
}

function dicon(){
    document.getElementById('idcon').style.display='block';
    getData();
}