const add = require('./add')
const { displayTree, BinarySearchTree, Node } = add;
let myTree = new BinarySearchTree()
// myTree.add(1)
// myTree.add(2)
// myTree.add(3)
// myTree.add(-1)
// displayTree(myTree)

class treeWithDfs extends BinarySearchTree {
    // constructor() {
    //     super();
    //     this.root = null;
    // }
    inOrder() {
        if (this.root == null) {
            return null;
        } else {
            let result = [];
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.value);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        };
    }
}
const TreeWithDfs = new treeWithDfs()
TreeWithDfs.add(18);
TreeWithDfs.add(-10);
TreeWithDfs.add(22);
TreeWithDfs.add(2);
TreeWithDfs.add(7);
TreeWithDfs.add(-5);

displayTree(TreeWithDfs)
console.log('inOrder: ' + TreeWithDfs.inOrder());

