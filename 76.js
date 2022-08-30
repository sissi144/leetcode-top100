/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 /*使用哈希标记出现次数*/
var minWindow = function(s, t) {
   let l=0,r=0;
   let ans = '';
   let need = new Map();
   for(let c of t){
       need.set(c, need.has(c)?need.get(c)+1:1);
   }
   let needType = need.size;
   while(r<s.length){
       let tmp = s[r];
       if(need.has(tmp)){
           need.set(tmp, need.get(tmp)-1);
           if(need.get(tmp)===0) needType-=1;
       }
       while(needType===0){
           let res = s.substring(l,r+1);
           if(!ans||res.length<ans.length) ans = res;
           if(need.has(s[l])){
               need.set(s[l],need.get(s[l])+1);
               if(need.get(s[l])===1) needType+=1;
           }
           l++;
       }
       r++;
   }
   return ans;
};