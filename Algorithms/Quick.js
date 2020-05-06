const Quick=(arr)=>{
    if (arr.length<=1||!arr){
        return arr
    } else {
        const right=[];
        const left=[];
        const [pivot,...rest]=arr
        rest.map(x=>x>pivot?right.push(x):left.push(x))
        return Quick(left).concat(pivot).concat(Quick(right))
    }
}

Quick([-1,4,50,32.4,25,29,30])