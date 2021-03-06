class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Returns true if there are no nodes attached to
  // the root of the tree. Returns false if there are
  // any nodes in the tree.
  isEmpty() {
    if(this.root === null) {
      return true;
    }
      return false;
  }

  // returns an array of all elements in the tree using
  // an in-order traversal (left, current, right)
  toArray() {
    let accumulator = [];
    this._toArray(this.root, accumulator);
    return accumulator;
  }

  // helper method that keeps track of the current node in the traversal
  // and maintains a reference to the array accumulating values.
  _toArray(node, accumulator) {
    if (!node) {
      return accumulator;
    }

    this._toArray(node.left, accumulator);
    accumulator.push(node.value);
    this._toArray(node.right, accumulator);

    return accumulator;
  }

  // search through the tree (via any traversal)
  // and return true if the value is found in the tree,
  // otherwise return false.
  contains(value) {
    return this._contains(value, this.root)
  }
    _contains(value, node) {
      if(node === null) {
        return false;
      }
      if(node.value === value) {
        return true;
      }
      return this._contains(value, node.left) || this._contains(value, node.right);
    }

  // add the given value at an appropriate place in the binary search tree.
  // the first value is always attached manually to the root. all following
  // values are added toward the left if they're less than the value at a node,
  // or toward the right if the value is greater than the current node.
  add(value) {
    if(this.root === null) {
      this.root = new TreeNode(value);
      return;
    }
      this._add(value, this.root);
  }

  _add(value, node) {
    if(value < node.value) {
      if(node.left === null) {
        return node.left = new TreeNode(value);
      }
      this._add(value, node.left);
    } else if (value > node.value) {
      if(node.right === null) {
        return node.right = new TreeNode(value);
      }
      this._add(value, node.right);
    }
  }

  // traverse two trees simultaneously.
  // return true if they contain the same values in the same place.
  // return false if they contain any inconsistent values.
  equals(otherTree) {

  }

  // return the overall minimum value stored in the tree.
  // return undefined if the tree is empty.

  minValue() {
    if (this.root === null) {
      return undefined;
    }
    let min = this.root.value;
    let newMin = this._minValue(this.root, min);
    return newMin;
  }

  _minValue(node, min) {
    if (node.left) {
      if (min > node.left.value) {
        min = node.left.value;
      }
      min = this._minValue(node.left, min);
    }
    if (node.right) {
      if (min > node.right.value) {
        min = node.right.value;
      }
      min = this._minValue(node.right, min);
    }
    return min;
  }

  // return the overall maximum value stored in the tree.
  // return undefined if the tree is empty.
  maxValue() {
    if(this.root === null) {
      return undefined;
    }
      let max = this.root.value;
      let newMax = this._maxValue(this.root, max);
      return newMax;
  }

  _maxValue(node, max) {
    if(node.left) {
      if(max < node.left.value) {
        max = node.left.value;
      }
      max = this._maxValue(node.left, max);
    }
    if(node.right) {
      if(max < node.right.value) {
        max = node.right.value;
      }
      max = this._maxValue(node.right, max);
    }
    return max;
  }


  // use a traversal to count the total number of nodes stored in the tree.
  // DO NOT store a value like `numNodes` and increment it in add().
  // You MUST traverse the entire tree when you do this.
  numNodes() {
    if(this.root === null) {
      return 0;
    }
    let count = 1;
    return count += this._numNodes(this.root);
  }

  _numNodes(node) {
    let num = 0;
    if(!node) {
      return count;
    }
    if(node.left) {
      num ++;
      num += this._numNodes(node.left);
    }
    if(node.right) {
      num++;
      num += this._numNodes(node.right);
    }
    return num;
  }

  // traverse the entire tree and count the total number of leaf nodes.
  // leaf nodes are nodes that have no child nodes on their left or right.
  numLeaves() {
    if(this.root === null) {
      return 0;
    }
    let leaves = 0;
    return leaves += this._numLeaves(this.root);
  }

  _numLeaves(node) {
    let leaves = 0;
    if(!node.left && !node.right) {
      leaves++;
    } else {
      if(node.left) {
      leaves += this._numLeaves(node.left);
    }
      if(node.right) {
        leaves += this._numLeaves(node.right);
      }
    }
    return leaves;
  }

  // BONUS: returns true if the tree has one node with the value
  // of the average value of all the nodes themselves. for example: 
  // true for tree with [2 4 6 8 10] because it has 6
  // false for tree with [1 2 3 4 5 6] because it has no 3.5
  
  // step 1: go through tree to determine average value.
  doesTreeContainAverage() {
    if(this.root === null) {
      return false;
    }
    let nodes = this.numNodes();
    let sum = this._doesTreeContainAverageSum(this.root);
    let avg = sum / nodes;
    return this.contains(avg);
  }
  // step 2: go through tree again to see if it has that value.
  _doesTreeContainAverageSum(node) {
    let sum = node.value;
    if(node.left) {
      sum += this._doesTreeContainAverageSum(node.left);
    }
    if(node.right) {
      sum += this._doesTreeContainAverageSum(node.right);
    }
    // step 3: return result
    return sum;
  }
}

module.exports = {
  TreeNode,
  BinarySearchTree,
}
