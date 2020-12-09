var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    // Only change code below this line
    this.add = function (value) {
        var node = this.root;
        if (node == null) {
            this.root = new Node(value);
            return;
        } else {
            function searchTree(node) {
                if (value < node.value) {
                    if (node.left == null) {
                        node.left = new Node(value);
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left);
                    }
                } else if (value > node.value) {
                    if (node.right == null) {
                        node.right = new Node(value);
                        return;
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }
    this.remove = function (data) {
        let rootNode = this.root
        if (!this.root) { return null }
        if (data === rootNode.value && !rootNode.left && !rootNode.right) {
            return this.root = null
        }
        let prev;
        const recurFind = (curr) => {
            if (curr === null) {
                console.log(curr, "curr")
                return null
            }
            if (data > curr.value) {
                prev = curr
                curr = curr.right
                recurFind(curr)
            } else if (data < curr.value) {
                prev = curr
                curr = curr.left
                recurFind(curr)
            } else if (data === curr.value) {
                // console.log(prev, 'prev')
                //test for a case with one child
                if (!curr.left && !curr.right) {
                    if (prev.right.value === data) {
                        prev.right = null
                    } else {
                        prev.left = null
                    }
                } else if ((!curr.left && curr.right) || (curr.left && !curr.right)) {
                    if (!curr.left) {
                        prev.right = curr.right
                    } else {
                        prev.left = curr.left
                    }
                } else {
                    //target has two children find min in right subtree
                    const findMinInRightSub = (node) => {
                        if (!node.left) {
                            prev.left = null
                            curr.value = node.value
                            return
                        } else {
                            prev = node;
                            node = node.left
                            findMinInRightSub(node)
                        }
                    }
                    findMinInRightSub(curr.right)
                }
            }
        }
        recurFind(rootNode)

    }
}

let t = new BinarySearchTree()
t.add(5);
t.add(3);
t.add(7);
t.add(6);
t.add(10);
t.add(12);
t.add(9)
t.add(8)
t.remove(7)
displayTree(t, "t")