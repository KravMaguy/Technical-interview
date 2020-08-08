https://stackoverflow.com/questions/47255382/removing-duplicate-sub-arrays

const arr = [[1,3],[2,5],[1,3],[2,5]];

const setArray = new Set(arr.map(x => JSON.stringify(x)))

const uniqArray = [...setArray].map(x => JSON.parse(x))

console.log(uniqArray)

// Conver the 2D array into 1D array with stringified elements

// Then put then into a Set to automatically filter out the repeating elements

// Now convert the Set back to an array and map the array by JSON parsing each element to restore back the arrays