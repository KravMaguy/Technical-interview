function fib(n){
    if(n==0){return 1}
    else return fib(n)+fib(n-1)
}

//expect fib(7)===13

// 1,1,2,3,5,8,13
console.log(fib(4))