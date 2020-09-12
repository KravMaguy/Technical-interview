/* Graphs: Breadth-first search */
function bfs(graph, root) {
    var nodesLen = {};

    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    var queue = [root];
    var current;

    while (queue.length != 0) {
        current = queue.shift();

        var curConnected = graph[current];
        var neighborIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (var j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));
/**
 * Implementation of DFS (depth-first search) Algorithm to find the shortest path from a start to a target node.
 * Given a start node, this returns the node in the tree below the start node with the target value (or null if it doesn't exist)
 * Runs in O(n), where n is the number of nodes in the tree, or O(b^d), where b is the branching factor and d is the depth.
 *
 * @param start  the node to start the search from
 * @param target the value to search for
 * @return The node containing the target value or null if it doesn't exist.
 */
const dfs = function (start, target) {
    console.log("Visiting Node " + start.value);
    if (start.value === target) {
        // We have found the goal node we we're searching for
        console.log("Found the node we're looking for!");
        return start;
    }

    // Recurse with all children
    for (var i = 0; i < start.children.length; i++) {
        var result = dfs(start.children[i], target);
        if (result != null) {
            // We've found the goal node while going down that child
            return result;
        }
    }

    // We've gone through all children and not found the goal node
    console.log("Went through all children of " + start.value + ", returning to it's parent.");
    return null;
};

function traverseBFS(root) {
    let queue = [root]
    let res = []

    while (queue.length) {
        let curr = queue.shift()
        res.push(curr.key)

        if (curr.right) {
            queue.push(curr.right)
        }

        if (curr.left) {
            queue.push(curr.left)
        }
    }

    return res
}



function traverseDFS(root) {
    let stack = [root]
    let res = []

    while (stack.length) {
        let curr = stack.pop()
        res.push(curr.key)

        if (curr.right) {
            stack.push(curr.right)
        }

        if (curr.left) {
            stack.push(curr.left)
        }
    }

    return res.reverse()
}