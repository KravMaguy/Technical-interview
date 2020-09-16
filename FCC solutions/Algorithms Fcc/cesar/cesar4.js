const isInRange=(x)=>{
    if(x.charCodeAt()>64&&x.charCodeAt()<91){
        
        return String.fromCharCode((((x.charCodeAt()-65)+13)%26)+65)
    } else {
        return x
    }
}
function rot13(str) {
    let charArray=str.split('')
    let AsciiArray=charArray.map(function(x) { return isInRange(x); }
    )
    str=AsciiArray.join('')
    return str;
  }
  
  console.log(rot13("SERR"));