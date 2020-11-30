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
    this.print = function () { }
    this.isWord = function (word) {

    }
    // Only change code above this line
};

let myDictionary = new Trie()
myDictionary.add('code')
myDictionary.add('coding')
displayTree(myDictionary)
