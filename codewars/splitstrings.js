// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
function solution(str){
      if(str.length===0){return []}
       str=str.match(/.{1,2}/g);
       str[str.length-1]=str[str.length-1].length===1?str[str.length-1]+'_':str[str.length-1]
       return str

    }
