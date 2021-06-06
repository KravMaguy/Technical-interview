process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var stdin = '';
// process.stdin.on('data', function (chunk) {
//   stdin += chunk;
// }).on('end', function() {
  // var lines = stdin.trim().split('\n');
  // for(var i=0; i<lines.length; i++) {
    // let inputStr=lines[i].toLowerCase()
    let inputStr="Good luck in the Facebook Hacker Cup this year!"
    inputStr=inputStr.toLowerCase()

    let obj={}, frequencies=[], temp
    //make hashmap of frequencies
    for(let letter of inputStr){
      if(letter.charCodeAt()>96&&letter.charCodeAt()<123){
        if(!obj[letter]){
          obj[letter]=1
        } else {
          obj[letter]=obj[letter]+1
        }
      }
    }
    //add to array of letter frequencies
    for(const [key, value] of Object.entries(obj)){
      frequencies.push(value)
    }
    //sort array
    for(let i=0;i<frequencies.length-1;i++){
      for(let j=i+1;j<frequencies.length;j++){
        if(frequencies[i]<frequencies[j]){
          temp=frequencies[i]
          frequencies[i]=frequencies[j]
          frequencies[j]=temp
        }
      }
    }
    let maxBeautyVal=26
    let startingVal=0
    let val;
    frequencies.forEach(frequency=>{
      val=frequency*maxBeautyVal
      startingVal=startingVal+val
      maxBeautyVal=maxBeautyVal-1
    })
    // process.stdout.write(JSON.stringify(obj));
    // process.stdout.write(maxBeautyVal.toString());
    console.log(JSON.stringify(obj));
    console.log(startingVal.toString());
  // }
// });