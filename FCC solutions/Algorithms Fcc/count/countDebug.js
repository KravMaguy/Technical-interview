const countUp=(n)=>{
    if(n===0){
        return []
    } else {
        debugger
        arr=countUp(n-1)
        debugger
        arr.push(n)
        debugger
        return arr
    }
}
console.log(countUp(5))