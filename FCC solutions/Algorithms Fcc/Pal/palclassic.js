function palindrome(str) {
    let i,rev=''
    str = str.toUpperCase().replace(/[_\W+]/g, '')
    for(i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev===str
}
console.log(palindrome("My age is 0, 0 si ega ym."));