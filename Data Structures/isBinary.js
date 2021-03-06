var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    this.isBalanced = function () {
        return this.findMaxHeight() - this.findMinHeight() <= 1 ? true : false
    }
    this.findMaxHeight = function () {
        let root = this.root
        let leftHeightOfSub;
        let rightHeightOfSub;
        const getMaxDepth = (root) => {
            if (root === null) { return -1 }
            leftHeightOfSub = getMaxDepth(root.left)
            rightHeightOfSub = getMaxDepth(root.right)
            return Math.max(leftHeightOfSub, rightHeightOfSub) + 1
        }
        return getMaxDepth(root)
    }

    this.findMinHeight = function () {
        let root = this.root
        let leftHeightOfSub;
        let rightHeightOfSub;
        const getMaxDepth = (root) => {
            if (root === null) { return -1 }
            leftHeightOfSub = getMaxDepth(root.left)
            rightHeightOfSub = getMaxDepth(root.right)
            return Math.min(leftHeightOfSub, rightHeightOfSub) + 1
        }
        return getMaxDepth(root)
    }

    this.inorder = function () {
        if (!this.root) { return null }
        let root = this.root
        let stack = []
        const recurse = (root) => {
            root.left && recurse(root.left)
            stack.push(root.value)
            root.right && recurse(root.right)
        }
        recurse(root)
        return stack
    }
    this.levelOrder = function () {
        if (!this.root) { return null }
        let toPrint;
        let toReturn = []
        let q = []
        let node = this.root
        q.push(node)
        while (q.length != 0) {
            toPrint = q.shift()
            if (toPrint.left) {
                q.push(toPrint.left)
            }
            if (toPrint.right) {
                q.push(toPrint.right)
            }
            toReturn.push(toPrint.value)
        }
        return toReturn
    }

    this.preorder = function () {
        if (!this.root) { return null }
        let root = this.root
        let stack = []
        const recurse = (root) => {
            stack.push(root.value)
            root.left && recurse(root.left)
            root.right && recurse(root.right)
        }
        recurse(root)
        return stack
    }

    this.postorder = function () {
        if (!this.root) { return null }
        let root = this.root
        let stack = []
        const recurse = (root) => {
            root.left && recurse(root.left)
            root.right && recurse(root.right)
            stack.push(root.value)

        }
        recurse(root)
        return stack
    }

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

    this.levelOrder = function () {
        if (!this.root) { return null }
        let toReturn = []
        let holder = []
        let q = []
        let root = this.root
        q.push(root)
        //as long as q is not empty we can take out a node from the front visit it and enque its children
        while (q.length > 0) {
            holder[holder.length] = q.shift(q[0])
            console.log(holder[holder.length - 1].value)
            toReturn.push(holder[holder.length - 1].value)
            if (holder[holder.length - 1].left) {
                q.push(holder[holder.length - 1].left)
            }
            if (holder[holder.length - 1].right) {
                q.push(holder[holder.length - 1].right)
            }
        }
        console.log(toReturn)
        return toReturn

    }

    this.remove = function (data) {
        let root = this.root
        let SearchTree = (root) => {
            if (data === root.value) { return console.log("we found " + data) }
            if (data > root.value) {
                console.log(data + "is greater than" + root.value)
                SearchTree(root.right)
            } else if (data < root.value) {
                console.log(data + "less than" + root.value)
                SearchTree(root.left)
            } else {
                console.log("not found")
            }
        }
        SearchTree(root)

    }

    this.reverseLevelOrder = function () {
        if (!this.root) { return null }
        let toPrint;
        let toReturn = []
        let q = []
        let node = this.root
        q.push(node)
        while (q.length != 0) {
            toPrint = q.shift()
            if (toPrint.right) {
                q.push(toPrint.right)
            }
            if (toPrint.left) {
                q.push(toPrint.left)
            }
            toReturn.push(toPrint.value)
        }
        return toReturn
    }
    this.invert = function () {
        let root = this.root
        const invert = (root) => {
            if (root == null) {
                debugger;
                return null
            } else {
                debugger;
                let left = invert(root.left)
                let right = invert(root.right)
                let temp = root.right
                root.right = root.left
                root.left = temp
            }
        }
        invert(root)
    }
    this.remove = function (data) {
        if (data === this.root.value && !this.root.left && !this.root.right) { return this.root = null }
        let stack = []
        let nullflag
        let root = this.root
        let SearchTree = (root) => {
            if (root === null) {
                console.log('does not exist')
                return nullflag = -1
            }
            if (data === root.value) {
                return stack[stack.length - 1].left.value === data ? stack[stack.length - 1].left = null : stack[stack.length - 1].right = null
            }
            if (data > root.value) {
                stack.push(root)
                SearchTree(root.right)
            } else if (data < root.value) {
                stack.push(root)
                SearchTree(root.left)
            } else {
                console.log("no params")
            }
        }
        SearchTree(root)
        if (nullflag === -1) { return null }
    }
}
function isBinarySearchTree(tree) {
    // Only change code below this line
    let flag = true
    const inEfficient = (a) => {
        for (let i = 0; i < a.length - 1; i++) {
            if (a[i] < a[i + 1]) {

            } else {
                flag = false
                console.log('not a bst')
                return flag
            }
        }
        return flag
    }
    let current = tree.root
    let holder = []
    tree.inOrder = function (current) {
        current.left && tree.inOrder(current.left)
        holder.push(current.value)
        current.right && tree.inOrder(current.right)
    }
    tree.inOrder(current)
    console.log(holder)
    return inEfficient(holder)
    // Only change code above this line
}
let a = [8, 3, 10, 1, 6]

let myTree = new BinarySearchTree()
a.map(x => myTree.add(x))
// displayTree(myTree)
myTree.invert()
// isBinarySearchTree(myTree)