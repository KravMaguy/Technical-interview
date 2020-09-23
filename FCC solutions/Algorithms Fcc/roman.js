function convertToRoman(num) {
    let x, roman=''
    var numberalObj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    for ( x in numberalObj ) {
        // console.log(x, numberalObj[x])
        while(numberalObj[x]<=num){
            roman+=x
            num-=numberalObj[x]
        }
    }
    return roman;
  }
  console.log(convertToRoman(120))