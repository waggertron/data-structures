const Stack = require('stack.js');

function Tree(val=null) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.height = 0;
}
Tree.prototype.add = function(val) {
  let added = false;
  if (val < this.val) {
    added = true;
    if (!this.left) {
      this.left = new Tree(val);
    } else {
      this.left.add(val);
    }
  } else if (val > this.val) {
    added = true;
    if (!this.right) {
      this.right = new Tree(val);
    } else {
      this.right.add(val);
    }
  }
  if (added) this.updateHeight();
}

Tree.prototype.updateHeight = function() {
  this.height = this.getHeight();
}

Tree.prototype.getHeight = function() {
  if (!this.left && !this.right) return 0;
  if (this.left && this.right) {
    return 1 + Math.max(this.left.getHeight(), this.right.getHeight());
  }
  if (this.left) {
    return 1 + this.left.getHeight();
  }
  return 1 + this.right.getHeight();
}

Tree.prototype.balanced = function() {
  if (!this.left && !this.right) return true;
  if (this.left && !this.right) return this.left.height === 0;
  if (this.right && !this.left) return this.right.height === 0;
  return Math.abs(this.right.height - this.left.height) <=1 && this.right.balanced() && this.right.balanced();
}
Tree.prototype.preorderIterative = function(cb) {
  const stack = new Stack();
  stack.push(this);
  let temp
  while(!stack.isEmpty()) {
    temp = stack.pop();
    cb(temp.val);
    if (temp.right) stack.push(temp.right);
    if (temp.left) stack.push(temp.left);
  }
}
Tree.prototype.preorderRecursive = function(cb) {
  if (this.left) this.left.preorderRecursive(cb);
  cb(this.val);
  if (this.right) this.right.preorderRecursive(cb);
}

// remove
// restructure

// a = new Tree(50);
// a.add(75);
// a.add(80);
// a.add(60);
// a.add(25);
// a.add(10);
// a.add(30);










module.exports = Tree;