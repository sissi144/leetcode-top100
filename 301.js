/* DFS*/
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {

    // 尝试去掉一个括号以后 然后验证是否有效  dfs+回溯
    const helper = (str, start, lremove, rremove) => {
        if (lremove === 0 && rremove === 0) {
            if (isValid(str)) {
                res.push(str);
            }
            return;
        }

        for (let i = start; i < str.length; i++) {
            // 连续相同的括号时 不需要重复 跳过即可 去重
            if (i !== start && str[i] === str[i - 1]) {
                continue;
            }
            // 如果剩余的字符无法满足去掉的数量要求，直接返回
            if (lremove + rremove > str.length - i) {
                return;
            } 
            // 尝试去掉一个左括号
            if (lremove > 0 && str[i] === '(') {
                helper(str.substr(0, i) + str.substr(i + 1), i, lremove - 1, rremove);
            }
            // 尝试去掉一个右括号
            if (rremove > 0 && str[i] === ')') {
                helper(str.substr(0, i) + str.substr(i + 1), i, lremove, rremove - 1);
            }
        }
    }

    const res = [];
    let lremove = 0;
    let rremove = 0;

    for (const c of s) {
        if (c === '(') {
            lremove++;
        } else if (c === ')') {
            if (lremove === 0) {
                rremove++;
            } else {
                lremove--;
            }
        }
    }
    // 找到可以删除的左右括号数 然后寻找
    helper(s, 0, lremove, rremove);
    return res;
}

const isValid = (str) => {
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            cnt++;
        } else if (str[i] === ')') {
            cnt--;
            if (cnt < 0) {
                return false;
            }
        }
    }

    return cnt === 0;
}

/* BFS */

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const ans = [];
    // 自动去重
    let currSet = new Set();
    currSet.add(s);

    while (true) {
        for (const str of currSet) {
            if (isValid(str)) {
                ans.push(str);
            }
        }
        // 首次出现合法的序列就是最少的修改次数， 这时候结束循环就可以
        if (ans.length > 0) {
            return ans;
        }
        const nextSet = new Set();
        // 每一次尝试去掉一个左括号或者右括号， 然后判断是否为有效
        for (const str of currSet) {
            for (let i = 0; i < str.length; i ++) {
                if (i > 0 && str[i] === str[i - 1]) { // 去重
                    continue;
                }
                if (str[i] === '(' || str[i] === ')') {
                    nextSet.add(str.substring(0, i) + str.substring(i + 1));
                }
            }
        }
        currSet = nextSet;
    }
}

const isValid = (str) => {
    let cnt = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            cnt++;
        } else if (str[i] === ')') {
            cnt--;
            if (cnt < 0) {
                return false;
            }
        }
    }

    return cnt === 0;
}