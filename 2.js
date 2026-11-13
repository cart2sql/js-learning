//取最小值
const min = function(a,b){
    if(a>b){
        return(b)
    }else{
        return(a)
    }
}
console.log(min(0,-10));



//递归检查单双数
function isEven(n) {
    if (n < 0)return isEven(-n)
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n - 2);
  
}
console.log(isEven(-100))



//豆子计数

function countBs (char){
    let totle = 0;
    for(let i = 0; i < char.length; i++){
        if (char[i]=="B"){
            totle += 1
        }
    }
    return totle
}
console.log(countBs("BoB"))







function countchar (char,ch){
    let totle = 0;
    for(let i = 0; i < char.length; i++){
        if (char[i]== ch){
            totle += 1
        }
    }
    return totle
}
console.log(countchar("zmjjkk","k"))