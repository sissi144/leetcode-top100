/* 辅助栈 */
var MinStack = function() {
    this.stack = [];
    this.minarr = [Infinity]; // 这里要注意  首个元素的比较
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
 this.stack.push(val);
 this.minarr.push(Math.min(this.minarr[this.minarr.length-1],val))// for here
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minarr.pop();
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minarr[this.minarr.length-1]  
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */