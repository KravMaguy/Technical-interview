const arr=[1,2,3,4,5,6,7,8,9,10]

const findElem=(array, elem)=>{
  let min=0, max=array.length-1
  if(elem<array[min]||elem>array[max]){
    return console.log('not in array')
  }
  while(min<=max){
    let middle=Math.floor((max+min)/2)
    if(array[middle]>elem){
      max=middle-1  
    } 
    if(array[middle]<elem){
       min=middle+1
    } 
    if(array[middle]===elem){
      return console.log(`element ${elem} is found at index ${middle}`)
    }   
  }
   return console.log('not in array')
}

findElem(arr, 4)
