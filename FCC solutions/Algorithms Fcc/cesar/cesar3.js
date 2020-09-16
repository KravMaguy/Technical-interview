const isInRange = (x) => {
    let charVal = x.charCodeAt()
    // if (charVal > 64 && charVal < 91) {
    //     if (charVal <= 77) {
    //         return String.fromCharCode(charVal + 13)
    //     } else {
    //         return String.fromCharCode(charVal - 13)
    //     }
    // } else {
    //     return x
    // }
    return (charVal < 64 && charVal > 91) ? x : charVal <= 77 ? String.fromCharCode(charVal + 13) : String.fromCharCode(charVal - 13)
}
const rot13 = (str) => {
    return str.split('').map(x => isInRange(x)).join('')
}
console.log(rot13("SERR PBQR PNZC"));
