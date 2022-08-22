/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 /*拿排序后的字母单词作key*/
var groupAnagrams = function(strs) {
    let map = new Map();
    for(const str of strs){
        let temp = Array.from(str);
        temp.sort();
        let key = temp.toString();
        let list = map.has(key)?map.get(key):[];
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 /*拿26个字母中出现的count作key*/
var groupAnagrams = function(strs) {
    let map = new Object();
    for(const str of strs){
        let count = new Array(26).fill(0);
        for(let c of str) {
            count[c.charCodeAt()-'a'.charCodeAt()]++;
        }
        map[count]?map[count].push(str):map[count]=[str];
    }
    return Object.values(map);
};