function getcount(){
    let count = 0;
    document.getElementById('btn').onclick=function(){
        count ++;
        document.getElementById('count').innerHTML=count;
    }
}