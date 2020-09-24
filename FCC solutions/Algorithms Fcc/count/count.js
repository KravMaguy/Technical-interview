function countup(n) {
    //without this go on forever
      if (n < 0) {
        return [];
      } else {
        const countArray = countup(n - 1);
    // what is countup(4)??
    //I need to know what is countup(3) 
    //I need to know what is countup(2)
    //I need to know what is countup(1)
    //try countup(0), ive hit base case
    //return [] (countArray has become defined as an empty array)
    
    //countup(4, countup(3, countup(2, countup(1, []))))
    //where the empty array above is in the last bracket would have been count(0) but we 
    //were stopped by the base case from continuing...these functions are piling/stacking //on top
    //of each other. until i reach the base case that countarray is undefined.. it will become defined 
    //when the height of the pile is n
    
    countArray.push(n);
    //each call will continue where It left off, they are now resolving, so for each call 
    //i will:
    //[].push(n)
    //[1].push(n)
    //[1,2].push(n)
    //[1,2,3].push(n)
    //the n above represents what the value of n was, and each function remembers its execution context, basically what the value of n was (plus some other stuff)
    
        return countArray;
    //the countarray is now [1,2,3,4]
      }
    }
    console.log(countup(4));

    // and also I would like to add that its slower because it has to remember all its context and it requires more memory because of that.

    //and the classic way is better:

   const countupclassic=(n)=>{
        let holder=[]
        for(let i=0;i<=n;i++){
            holder.push(i)
        }
        return holder
    }
    console.log(countupclassic(10))