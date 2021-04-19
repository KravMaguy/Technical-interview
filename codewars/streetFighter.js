// https://www.codewars.com/kata/5853213063adbd1b9b0000be/solutions/javascript

function streetFighterSelection(fighters, position, moves){
    let fighter;
    let movesArray=[];
//     position=[0,0]
    let currentPosition=[...position]
//     moves = ['up', 'left', 'right', 'left', 'left'];
//     fighters = [
// 	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
// 	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ];
  // console.log(moves.length)
  for(let i=0;i<moves.length;i++){
    if(moves[i]==='up'){
      currentPosition[0]=0
    }
    if(moves[i]==='down'){
      currentPosition[0]=1
    }
    if(moves[i]==='left'){
      if(currentPosition[1]===0){
        currentPosition[1]=fighters[currentPosition[0]].length-1
      } else {
         currentPosition[1]=currentPosition[1]-1
      }
    }
    if(moves[i]==='right'){
       if(currentPosition[1]===fighters[currentPosition[0]].length-1){
        currentPosition[1]=0
      } else {
         currentPosition[1]=currentPosition[1]+1
      }
    }
    fighter=fighters[currentPosition[0]][currentPosition[1]]
    movesArray.push(fighter)
  }
  return movesArray
}