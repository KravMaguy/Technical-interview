var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.add = (data) => {
        let node = this.root
        if (node === null) {
            return this.root = new Node(data);
        } else {
            const searchTree = (node) => {
                // debugger;
                if (data > node.value) {
                    // if(node.right===null){
                    //   node.right=new Node(data)
                    // } else {
                    //   searchTree(node.right)
                    node.right === null ? node.right = new Node(data) : searchTree(node.right)
                } else if (data < node.value) {
                    // if(node.left===null){
                    //   node.left=new Node(data)
                    // } else{
                    //   searchTree(node.left)
                    // }
                    node.left === null ? node.left = new Node(data) : searchTree(node.left)
                } else return
            }
            searchTree(node)
        }
    }
}

let myTree = new BinarySearchTree()
myTree.add(1)
myTree.add(2)
myTree.add(3)
myTree.add(-1)
displayTree(myTree)