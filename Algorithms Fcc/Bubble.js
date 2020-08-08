const Bubble = (arr) => {
  let length = arr.length;
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

Bubble([-1,4,50,32.4,25,29,30])