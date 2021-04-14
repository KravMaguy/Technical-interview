class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      // Only change code below this line
      if(this.write>=this.read){
      this.queue.splice(this.write, 1, item);
      this.write=this.write+1%this.max
      return item
      }
      return null
      // Only change code above this line
    }
  
    dequeue() {
      // Only change code below this line
      if(this.read<this.write){
      const returned=this.queue[this.read]
      this.queue.splice(this.read, 1, null);
      this.read=this.read+1%this.max
      return returned
      }
  
      return null
    }
  }
  
  const myQ=new CircularQueue(4)
  myQ.enqueue('some')
  myQ.enqueue('do')
  // myQ.dequeue()
  
  
  console.log(myQ.read,"read")
  console.log(myQ.write,"write")
  
  console.log(myQ.print())