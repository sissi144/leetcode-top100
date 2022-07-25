/*hard need to Improve */
const findMedianSortedArrays= function(nums1, nums2) {
    let totalLength = nums1.length + nums2.length;
    let median = 0;
    if(totalLength % 2 === 1) {
        let midIndex = Math.floor(totalLength / 2);
        median = getKthElement(nums1,nums2,midIndex+1);
    }else {
        let midIndex1 = Math.floor(totalLength / 2 ) - 1;
        let midIndex2 = Math.floor( totalLength /2 ) ;
        median = (getKthElement(nums1, nums2, midIndex1+1) +  getKthElement( nums1,nums2,midIndex2+1) ) /2;
    }

    return median
}
//找到两个有序数组中第k小的元素。
 const getKthElement = function(nums1, nums2, k) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let index1 = 0, index2 = 0; // 记录起始位置
    while(true) {
        if(index1 === l1) {
            return nums2[index2+k-1]
        }
        if(index2 === l2) {
            return nums1[index1+k-1]
        }
        if(k === 1) {
            return Math.min(nums1[index1],nums2[index2]);
        }
        let half = Math.floor(k/2);
        let newIndex1 = Math.min(index1 + half, l1) - 1;
        let newIndex2 = Math.min(index2 + half, l2) - 1;
        let pivot1 = nums1[newIndex1], pivot2 = nums2[newIndex2];
        //假如中间的小，把nums1左边的移除 缩短k的大小
        if(pivot1<=pivot2) {
            k -= (newIndex1-index1+1);
            index1= newIndex1+1 ;
        }else {
            k -= (newIndex2-index2+1);
            index2 = newIndex2 +1;
        }
    }
 }