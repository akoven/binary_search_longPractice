const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // newNode = new TreeNode(rootNode);
  let bst = new BinarySearchTree();
  // console.log(rootNode)
  // let min = Infinity
  // // let tempMin = bst.depthFirstTraversal()
  // if(!rootNode.right || !rootNode.left){
  //   return rootNode
  // }
  // if(rootNode.right && min > rootNode.right){
  //     min = rootNode.right
  //   }

  // if(rootNode.left && min > rootNode.left){
  //     min = rootNode.left
  //   }

  // if(rootNode.left.val > rootNode.right.val){
  //   min = rootNode.right
  // }else{
  //   min = rootNode.left.val
  // }
  // return min
  while(rootNode.left !== null){
    rootNode = rootNode.left
  }
  return rootNode.val;
}

function findMaxBST (rootNode) {
  while(rootNode.right !== null){
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT (rootNode) {
    if(rootNode === null) return
      let min = rootNode.val;
      let leftMin = findMinBT(rootNode.left)
      let rightMin = findMinBT(rootNode.right)
      if (leftMin < min){
        min = leftMin
      }
      if(rightMin < min){
        min = rightMin
      }
      return min
}



function findMaxBT (rootNode) {
  if(rootNode === null) return
  let max = rootNode.val;
  let leftMax = findMaxBT(rootNode.left)
  let rightMax = findMaxBT(rootNode.right)
  if (leftMax > max){
    max = leftMax
  }
  if(rightMax > max){
    max = rightMax
  }
  return max
}


function getHeight (rootNode) {
  if(rootNode === null) return -1

  let leftHeight = getHeight(rootNode.left)
  let rightHeight = getHeight(rootNode.right)

  if(leftHeight > rightHeight){
    return leftHeight + 1
  }else{
    return rightHeight + 1
  }

}

function countNodes (rootNode) {
  if(rootNode === null) return 0//when we try to access the child of a leaf, we return 0

  let leftNodes = countNodes(rootNode.left)
  let rightNodes = countNodes(rootNode.right)

  return leftNodes + rightNodes + 1 //adding one with every recursion
}

function balancedTree (rootNode) {
  if(rootNode == null) return 0
  let left = countNodes(rootNode.left)
  let right = countNodes(rootNode.right)

  if(left === right) return true
  else return false;
}

function getParentNode (rootNode, target) {
  if(target === rootNode.val) return null
  if(rootNode.right && target === rootNode.right.val || rootNode.left && target === rootNode.left.val){
    return rootNode
  }
  let left
  let right
  if(rootNode.left){
    left = getParentNode(rootNode.left,target)
  }
  if(rootNode.right){
    right = getParentNode(rootNode.right, target)
  }
  if(left){
    return left
  }
  if(right){
    return right
  }
  if(!left && !right){
    return undefined
  }
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode,target)

  // Undefined if the target cannot be found
  if(parentNode === undefined) return undefined
  // Set target based on parent
  let targetNode;
  let isLeftChild = false;//if false we are considering the right child

  if(!parentNode){//if there is one node left in a tree
    targetNode = rootNode;
  }else if(parentNode.left && parentNode.left.val === target){
    targetNode = parentNode.left
    isLeftChild = true
  }else if(parentNode.right && parentNode.right.val === target)
  targetNode = parentNode.right
  isLeftChild = false;

  // Case 0: Zero children and no parent:
  //   return null
  if(!parentNode && !targetNode.left && !targetNode.right) return null

  // Case 1: Zero children:
  //   set the parent that points to it to null
  if(!targetNode.left && !targetNode.right){
    if(isLeftChild) parentNode.left = null;
    else parentNode.right=null
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
