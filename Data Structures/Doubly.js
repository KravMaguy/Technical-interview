var Node = function (data, prev) {

    this.data = data;

    this.prev = prev;

    this.next = null;

};

var DoublyLinkedList = function () {

    this.head = null;

    this.tail = null;

    // change code below this line

    this.add = function (data) {
        let previous;
        let node = new Node(data)
        if(!this.head){
            this.head=node
            this.tail=node
        } else {
            let current=this.head
            while(current.next){
                previous=current
                current=current.next
                current.prev=previous
            }
            current.next=node
            previous=current
            node.prev=current
            this.tail=node
        }
    }

    this.isConnected = function () {
        let up = this.countFrom('head')
        let down = this.countFrom('tail')
        // console.log(up, 'up')
        // console.log(down, 'down')
        const rev = (arr) => {
            let temp = []
            for (let x = arr.length; x > 0; x--) {
                temp.push(x)
            }
            return temp
        }
        // console.log(rev(up), 'up was reversed')
        const Equals = (a, b) => {
            return a.length === b.length &&
                a.every((val, index) => val === b[index]);
        }
        return console.log(Equals(rev(up), down), '= you can travel both ways')
    }

    this.countFrom = function (extreme = 'head') {

        let myNodes = []

        if (extreme === 'head') {

            let current = this.head;

            while (current.next) {

                myNodes.push(current.data)

                current = current.next

            }

            myNodes.push(current.data)

            return myNodes

        } else {

            let current = this.tail;

            while (current.prev) {

                myNodes.push(current.data)

                current = current.prev

            }

            myNodes.push(current.data)

            return myNodes

        }

    }

    // change code above this line

};

console.clear()

let d = new DoublyLinkedList()

d.add(1)

d.add(2)

d.add(3)

d.add(4)

d.add(5)


console.log('head=', d.head)
console.log('tail=', d.tail)

console.log('count up from method=', d.countFrom())

console.log('count down from method =', d.countFrom(''))

// d.isConnected()
