function partsSums(ls) {
    // your code
  let results=[]
  while (ls.length>0){
    const n=ls.reduce((acc, curr)=>acc+curr)
    console.log(n, 'n')
    results.push(n)
    ls.shift()
  }
  results.push(0)
  return results
}

ls = [1, 2, 3, 4, 5, 6]
console.log(partsSums(ls))