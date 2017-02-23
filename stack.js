function Stack() {
  this.contents = [];
}
Stack.prototype.push = function(...items) {
  items.forEach(i => {
    if (i) {
      this.contents.push(i);
      this.length++;
    }
  });
}
Stack.prototype.pop = function(num = 1) {
  if (num === 1) {
    return this.contents.pop();
  }
  const result = [];
  for (let i = 0; i< num; i += 1) {
    result.push(this.contents.pop());
  }
  return result;
}

Stack.prototype.isEmpty = function() {
  return this.contents.length === 0;
}

module.exports = Stack;
