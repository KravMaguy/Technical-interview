const add = require('./add')
const {displayTree, BinarySearchTree, Node} = add;
let myTree=new BinarySearchTree()
myTree.add(1)
myTree.add(2)
myTree.add(3)
myTree.add(-1)
displayTree(myTree)