function palindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let str1 = str.split('').reverse().join('')
    return str===str1;
}
palindrome("My age is 0, 0 si ega ym.");