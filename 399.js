/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
 // 中心思想 建立起一张图， 边存储单向的距离， 最后根据寻找两个点之间的距离计算答案
var calcEquation = function(equations, values, queries) {
    let map = new Map();
    let npoints = 0;
    let n= equations.length;
    // 记录所有的变量 建立变量和序号对应的哈希表 npoints代表点的总数
    for(let i=0;i<n;i++){
        let temp = equations[i];
        if(!map.has(temp[0])) map.set(temp[0],npoints++);
        if(!map.has(temp[1])) map.set(temp[1],npoints++);
    }
    // 存储每个边的值
    let graph = new Array(npoints).fill(0).map(()=> new Array(npoints).fill(-1.0));
    for(let i=0;i<n;i++) {
        const va = map.get(equations[i][0]),vb = map.get(equations[i][1]);
        graph[va][vb]= values[i];
        graph[vb][va] = 1.0/values[i];
    }
    // 根据floyd算法求出两点间的距离 一般用于求最短距离，但这里只是求距离
    for(let k=0;k<npoints;k++){
        for(let i=0;i<npoints;i++){
            for(let j=0;j<npoints;j++){
                if(graph[i][k]>0 && graph[k][j]>0){
                    graph[i][j] = graph[i][k] * graph[k][j]; //假如经过这个点可以连接起i和j就是距离，min不min无所谓 因为一定是相等的。
                }
            }
        }
    }
    // 搜索是否存在边即可
    let m = queries.length;
    let ret = new Array(m).fill(-1.0);
    for(let i=0;i<m;i++){
        let query = queries[i];
        if( map.has(query[0]) && map.has(query[1]) ){
            const va = map.get(query[0]),vb = map.get(query[1]);
            if(graph[va][vb]>0){
                ret[i] = graph[va][vb];
            }
        }
    }
    return ret;
};