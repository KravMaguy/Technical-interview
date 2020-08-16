const threeSum=(array, target)=>{
    let length=array.length
    let holder=[]
    for(let i=0;i<length-2;i++){
        for(let j=i+1;j<length-1;j++){
            for(let k=j+1;k<length;k++){
                let a,b,c;
                a=array[i]
                b=array[j]
                c=array[k]
                if(a+b+c===target){
                    holder.push(a,b,c)
                }
            }
        }
    }
    const mySet=new Set()
    holder.forEach(x=>mySet.add(x))
    return mySet
    //  return holder
    // const setArray = new Set(holder.map(x => JSON.stringify(x)))
    // const uniqArray = [...setArray].map(x => JSON.parse(x))
    // return uniqArray;
}
console.log(threeSum([2,4,3,-2,0,1,-1,0,39],0))


// Conver the 2D array into 1D array with stringified elements

// Then put then into a Set to automatically filter out the repeating elements

// Now convert the Set back to an array and map the array by JSON parsing each element to restore back the arrays