function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };


    // Only change code below this line
    // this.enqueue=function(item){
    //   this.collection.unshift(item)
    // }
    // this.dequeue=function(){
    //   this.collection.sort(function(a, b){
    //     return a[1] - b[1];
    //   })
    //   console.log(this.collection, "sorted")
    //    return this.collection.pop()
    // }

    this.enqueue = function (item) {
        if (this.isEmpty()) {
            return this.collection.push(item)
        } else {
            for (let i = 0; i < this.collection.length; i++) {
                if (item[1] < this.collection[i][1]) {
                    return this.collection.splice(i, 0, item)
                }
            }
            return this.collection.push(item)
        }
    }

    this.dequeue = function () {
        return this.collection.pop()
    }

    this.front = function () {
        return this.collection[0]
    }

    this.isEmpty = function () {
        return this.size() === 0
    }
    this.size = function () {
        return this.collection.length
    }
}

let myQue = new PriorityQueue()
myQue.enqueue(['food', 1])
myQue.enqueue(['berries', 1])
myQue.enqueue(['peaches', 1])

// myQue.enqueue(['human', 10])

// myQue.enqueue(['pet', 2])
//  myQue.printCollection()
//  console.log(myQue.dequeue())

myQue.printCollection()
// console.log(myQue.front())
myQue.printCollection()
console.log(myQue.dequeue())
console.log(myQue.dequeue())

