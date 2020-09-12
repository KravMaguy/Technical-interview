const Quick=(arr)=>{
    if (arr.length<=1){
        return arr
    } else {
        const left=[]
        const right=[]
        const [pivot,...rest]=arr
        rest.map(x=>x>pivot?right.push(x):left.push(x))
        return Quick(left).concat(pivot).concat(Quick(right))
    }
}
console.log(Quick([0,2,3,10,-7,5]))

/*************************** */


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


/*************************** */

const Bubble = (arr) => {
    let length = arr.length;
    for (var i = arr.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  };
  
  Bubble([-1,4,50,32.4,25,29,30])