

//第一题 循环三角形
let A = "#";
let B = 1;
while(B < 8){
    console.log(A);
    A = A + "#";
    B += 1;
}

//第二题 FizzBuzz
for(let num = 1;num<=100;num += 1){
    if( num % 5 == 0 &&  num %3 == 0){
        console.log("FizzBuzz")
    } else if( num % 3 == 0){
        console.log("Fizz");
       }else if(num % 5 == 0){
        console.log("Buzz")
        }else console.log(num)
    }

//第三题 棋盘
    let size = 8 ;
    let x = "";
    for(let length = 0 ; length<size*(size + 1) ; length++){
        if(length % (size + 1)== size){
            x = x + "\n";
        }else if(length % 2 == 0){
            x = x + "#";
        }else {
            x = x + " "
        }
    }
    console.log(x)

//下面这个是ai写的，因为我发现我的棋盘在size=单数时就失效了
let size1 = 8;
let board = "";
for (let row = 0; row < size1; row++) {
  for (let col = 0; col < size1; col++) {
    if ((row + col) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}

console.log(board);


    
    


