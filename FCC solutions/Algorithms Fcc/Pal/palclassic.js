function palindrome(str) {
    let i,rev=''
    str = str.toUpperCase().replace(/\W/g, '')
    for(i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    return rev===str
}
palindrome("My age is 0, 0 si ega ym.");