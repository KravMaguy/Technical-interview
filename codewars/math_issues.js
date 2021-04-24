Math.round = function(number) {
    const [integer]=number.toString().split('.').map(Number)
    return number-integer>=.5?integer+1:integer
  };

Math.ceil = function(number) {
  const [integer]=number.toString().split('.').map(Number)
  return number-integer===0?number:integer+1;
};

Math.floor = function(number) {
  const [integer]=number.toString().split('.').map(Number)
  return integer
};



console.log(Math.round(4.5), 1, 'Math.round(0.5)');
console.log(Math.ceil(0), 1, 'Math.ceil(0.4)');
console.log(Math.ceil(5), 1, 'Math.ceil(0.5)');

console.log(Math.floor(0.4), 0, 'Math.floor(0.4)');
console.log(Math.floor(0.5), 0, 'Math.floor(0.5)');