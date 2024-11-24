function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let p1: number = m - 1
    let p2: number = n - 1
    let k: number = nums1.length - 1

    while(p2 >= 0){
        console.log(nums1[p1] , nums2[p2])
        if(nums1[p1] > nums2[p2]){
            nums1[k] = nums1[p1]
            p1--
        } else {
            nums1[k] = nums2[p2]
            p2--
        }
      k--
        console.log('nums after cycle:',[...nums1])
    }

}
const nums1=[1,2,3,0,0,0]
merge(nums1, 3, [2,5,6], 3)
console.log(nums1)