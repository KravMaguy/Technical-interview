function palindrome(str) {

    // str = str.toUpperCase().replace(/[_\W+]/g, '')    
    // str = str.toUpperCase().replaceAll(/[^A-Za-z0-9]/g, '')       
    str = str.toLowerCase().replace(/[^0-9a-z]/g, '')
    // str = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  
    //remove the a-z
    console.log(str.length)
    str.length%2===0?console.log('even'):console.log('odd')
    console.log(str, "=str")
    console.log("first letter=",str[0],"last letter=",str[str.length-1])
    // if(str.length===1){return true}
    if(str.length===1||!str.length){return true}
    if(str[0]!==str[str.length-1]){return false}
    return palindrome(str.substring(1,str.length-1))
}
palindrome("A man, a plan, a canal. Panama");