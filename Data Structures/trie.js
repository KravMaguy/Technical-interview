var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    // Only change code below this line
    this.root = new Node()
    this.add = function (word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let letter = word[i]
            if (node.keys[letter]) {
                node = node.keys[letter]
            } else {
                let newNode = new Node()
                node.keys[letter] = newNode
                node = newNode
            }
        }
        node.setEnd()
    }
    this.print = function () {
        let node = this.root
        let holder = []
        for (let key in node.keys) {
            console.log(key, "key")
            holder.push(node.keys[key])
        }
        console.log(holder, "=holder")

        let recurse = (root) => {
            if (root.end === true) {
                console.log('reace')
            } else {

            }
        }
        recurse(node)
    }
    this.isWord = function (word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let letter = word[i]
            if (node.keys[letter]) {
                node = node.keys[letter]
                if (i === word.length - 1) {
                    if (node.end === false) {
                        return false
                    }
                }
            } else {
                return false;
            }
        }
        return true
    }
    // Only change code above this line
};

let myDictionary = new Trie()
myDictionary.add('jump');
myDictionary.add('jumps');
myDictionary.add('jumped');
myDictionary.add('house');
myDictionary.add('mouse');
displayTree(myDictionary)

myDictionary.print()
