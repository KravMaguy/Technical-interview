const insert=(arr)=>{
    let length=arr.length
    for(let i=1;i<length;i++){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[i]){
                let holder=arr.splice(i,1)
                arr.splice(j,0,holder[0])

            }
        }
    }
    return arr
}

insert([6,1,8.9,-3,500,2,89,92,17])