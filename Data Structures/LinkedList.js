function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    if (this.head() === null) {
      head = new Node(element)
    } else {
      let current = this.head()
      while (current.next) {
        current = current.next
      }
      current.next = new Node(element)
    }
    length++
    // Only change code above this line
  };
  this.reverse = function () {
    let holder = []
    if (head) {
      let current = this.head()
      while (current.next) {
        holder.push(current.element)
        current = current.next
      }
      holder.push(current.element)
    }
    console.log(holder)
    let temp;
    let start = 0
    let end = holder.length - 1
    while (start <= end) {
      start++
      end--
      temp = holder[start]
      holder[start] = holder[end]
      holder[end] = temp
    }
    head = null
    holder.forEach(x => { this.add(x) })
  }

  this.reverseClassic = function () {
    console.log("***************************")
    let current = this.head()
    let prev = null;
    let next = null;
    while (current != null) {
      next = current.next
      console.log("next: \n", next)
      current.next = prev
      prev = current
      current = next
    }
    console.log('reversed =', prev)
  }
}

let myList = new LinkedList()
myList.add(1)
myList.add(2)
myList.add(3)
// myList.add(4)


console.log(myList.head(), "head")
myList.reverseClassic()

