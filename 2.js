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
    if (n == 0) return true;
    if (n == 1) return false;
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




//生成一个范围的数组
const range = function(start,end,step){
    let arr = []
    if(step == undefined){
        step = 1
    }
    if(step > 0){
        for(let i = start; i <= end; i += step){
            arr.push(i)
        }
    }else{
        for(let i = start; i >= end; i += step){
            arr.push(i)
        }
    }
    return arr
}
console.log(range(1,10))
console.log(range(5,2,-1))






//求和
const sum = function(arr){
    let totle = 0
    for(let i = 0; i < arr.length; i++){
        totle += arr[i]
    }
    return totle
}
console.log(sum(range(1,10)))









//反转数组，返回新数组
const reverseArray = function(arr){
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverseArray([1,2,3]))


//反转数组，直接改原数组
const reverseArrayInPlace = function(arr){
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left += 1
        right -= 1
    }
    return arr
}
let arr1 = [1,2,3,4]
reverseArrayInPlace(arr1)
console.log(arr1)






//数组转链表
const arrayToList = function(arr){
    let list = null
    for(let i = arr.length - 1; i >= 0; i--){
        list = {value: arr[i], rest: list}
    }
    return list
}
console.log(arrayToList([1,2,3]))


//链表转数组
const listToArray = function(list){
    let arr = []
    for(let node = list; node != null; node = node.rest){
        arr.push(node.value)
    }
    return arr
}
console.log(listToArray(arrayToList([1,2,3])))



//在链表最前面加一个值
const prepend = function(value,list){
    return {value: value, rest: list}
}
console.log(prepend(0,arrayToList([1,2,3])))

//取链表的第n个，递归
const nth = function(list,n){
    if(list == null){return undefined}
    if(n == 0){return list.value}
    return nth(list.rest, n - 1)
}
console.log(nth(arrayToList([1,2,3]),1))





const deepEqual = function(a,b){
    if(a === b){return true}
    if(a == null || b == null || typeof a != "object" || typeof b != "object"){return false}
    let keysA = Object.keys(a)
    let keysB = Object.keys(b)
    if(keysA.length != keysB.length){return false}
    for(let i = 0; i < keysA.length; i++){
        let key = keysA[i]
        if(keysB.indexOf(key) == -1){return false}
        if(deepEqual(a[key], b[key]) == false){return false}
    }
    return true
}
let obj1 = {a:1, b:{c:2}}
let obj2 = {a:1, b:{c:2}}
console.log(deepEqual(obj1,obj2))
console.log(deepEqual(obj1,{a:1}))