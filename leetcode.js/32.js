var longestValidParentheses = function (s) {
    let stack = []
    let stack2 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
        }else {
            if(stack.length!==0){
                stack2.push(stack.pop());
                stack2.push(s[i])
            }
        }
    }
    // return (stack.length%2!=0) ? stack.length-1 : stack.length
    // if(stack[0] === '('){
    //     stack2.pop();
    //     stack2.pop();
    // }
    console.log(stack);
    return stack2.length
};


console.log(longestValidParentheses("(()"));
console.log('**********');
console.log(longestValidParentheses(")()())"));
console.log('**********');
console.log(longestValidParentheses(''));
console.log('**********');
console.log(longestValidParentheses("()(()"));