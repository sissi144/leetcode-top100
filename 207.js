//0课程  1前置条件
const canFinish = (numCourses, prerequisites) => {
    const inDegree = new Array(numCourses).fill(0);// 入度
    const map = {}; // 记录 每个课程的后置课程
    for(let i = 0;i<prerequisites.length;i++){
        inDegree[prerequisites[i][0]]++;// 入度++
        if(map[prerequisites[i][1]]){
            map[prerequisites[i][1]].push(prerequisites[i][0]);
        }else {
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }
    const queue = []; //存放入度为0的
    for(let i=0;i<inDegree.length;i++){
        if(inDegree[i]==0) queue.push(i);
    }
    let count = 0;
    while(queue.length){
        const selected = queue.shift(); //学了以后，后置课程的入度对应减少
        count++;
        const toEndQueue = map[selected];
        if(toEndQueue && toEndQueue.length) {
            for(let i=0;i<toEndQueue.length;i++){
                inDegree[toEndQueue[i]]--;
                if(inDegree[toEndQueue[i]]==0){
                    queue.push(toEndQueue[i]);
                }
            }
        }
    }
    return count == numCourses;
}