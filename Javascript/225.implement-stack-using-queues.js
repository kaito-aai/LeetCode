/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

let s = null;

var MyStack = function() {
    s = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    s.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const n = [];
    for (i = 0; i < s.length - 1; i++) {
        n.push(s[i]);
    }

    ret = MyStack.prototype.top();
    s = n;
    return ret;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return s[s.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return s.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

