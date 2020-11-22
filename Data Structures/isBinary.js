var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    this.add = function (data) {
        if (this.root === null) {
            return this.root = new Node(data)
        }
        let current = this.root;
        while (current) {
            if (data > current.value) {
                if (current.right === null) {
                    return current.right = new Node(data)
                }
                current = current.right
            }
            if (data < current.value) {
                if (current.left === null) {
                    return current.left = new Node(data)
                }
                current = current.left
            }
        }
    }
}
function isBinarySearchTree(tree) {
    // Only change code below this line
    let current = tree.root
    let holder = []
    tree.inOrder = function (current) {
        current.left && tree.inOrder(current.left)
        holder.push(current.value)
        current.right && tree.inOrder(current.right)
    }
    tree.inOrder(current)
    console.log(holder)
    // Only change code above this line
}
let a = [5, 25, -10, 100, -30, 17]
let myTree = new BinarySearchTree()
a.map(x => myTree.add(x))
// displayTree(myTree)
isBinarySearchTree(myTree)