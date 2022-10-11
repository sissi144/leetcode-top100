/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // 身高从高到低排列 ， 前面的人数从低到高排列
    // 插入的时候 后面的人怎么插都不会影响前面的人，
    // 而且当前的序列的位置一定都是大于待插入数据的，所以只在插入的时候关心位置即可。
    let res = [];
    people.sort((a,b)=>{
        return a[0]===b[0]?a[1]-b[1]:b[0]-a[0];
    })
    people.forEach(single => res.splice(single[1],0, single))
    return res;
};