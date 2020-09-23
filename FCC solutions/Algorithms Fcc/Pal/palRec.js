function palindrome(str) {
    str = str.toUpperCase().replace(/[_\W+]/g, '')
    console.log(str, "=str")
    console.log("first letter=",str[0],"last letter=",str[str.length-1])
    if(!str.length||str.length===1){return true}
    if(str[0]!==str[str.length-1]){return false}
    return palindrome(str.substring(1,str.length-1))
}
palindrome("eye");