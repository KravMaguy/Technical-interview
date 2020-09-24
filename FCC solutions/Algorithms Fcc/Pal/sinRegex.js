const palindrome=(str)=>{
    str=str.toUpperCase()
    let holder=[]
    Array.from(str).forEach(x=>{
 x.charCodeAt()>=32&&x.charCodeAt()<=47||x.charCodeAt()===95?'':holder.push(x)
    })
    return JSON.stringify(holder)===JSON.stringify(holder.reverse())
}
palindrome("A man, a plan, a canal. Panama")