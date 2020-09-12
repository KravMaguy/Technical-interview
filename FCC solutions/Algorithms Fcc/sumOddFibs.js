function sumFibs(num) {
    let n1=0,n2=1,next, sum=1;
    const checkisOdd=(num)=>{
      return num%2===0?false:true
    }
    for(let i=1;i<=num;i++){
      let next=n1+n2
      n1=n2
      n2=next
      // console.log(sum, "=sum")
      console.log(next, "=next","next is odd=",checkisOdd(next) )
      // console.log(i, "=the ith")
      // console.log("next is odd=",checkisOdd(next))
      if(next>num){break;}
      if(checkisOdd(next)){
        sum+=next
      }
    }
    console.log(sum)
    return sum
  }
  
   console.clear()
  sumFibs(21);