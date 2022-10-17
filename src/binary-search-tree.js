// const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
* Implement simple binary search myTree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootTE = null;
  }
  root() {
    let rootTE = this.rootTE;
    return rootTE;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootTE) {
      this.rootTE = newNode;
      return;
    }

    let currentNode = this.rootTE;

    while(currentNode) {
      if (newNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return searchWithin(this.rootTE, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return searchWithin(this.rootTE, data);

    function searchWithin(node,data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ?
      searchWithin(node.left, data) :
      searchWithin(node.right, data);
    }
  }

  remove(data) {
    
    console.log("in remove ")
    
    this.rootTE = removeNode(this.rootTE, data);

    function removeNode (node, data) {
      
      console.log("in remove func " + node.data)
      
      if (!node) {
        
        console.log("in if !node")

        return null;
      }

      if (data < node.data) {

        console.log("in data < node.data");
        
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        
        console.log("in node.data < data");

        node.right = removeNode(node.right, data);
        return node;
      } else {
        
        console.log ("in else " + node.data)
        
        if (!node.left && !node.right) {
          
          console.log ("in else if !node.left && !node.right " + node.data)

          return null;
        }

        if (!node.left) {

          console.log("in ele if !node.left " + node.data)

          node = node.right;
          return node;
        }

        if (!node.right) {

          console.log("in else if !node.right" + node.data)

          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          console.log("in while")
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode (node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootTE) {
      return;
    }

    let node = this.rootTE;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootTE) {
      return;
    }

    let node = this.rootTE;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};