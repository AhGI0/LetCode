let c = [15, 15, 20, 20, 50, 50, 1, 20, 5, 1, 2, 2, 13, "A"];





var singleNumber = function (nums) {
    let empty = [];
    for (let i = 0; i <= nums.length - 1; i++) {
        let count = 0;
        for (let j = 0; j <= nums.length - 1; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count == 1) {
            empty.push(nums[i])
        }
    }
    return empty
};
console.log(singleNumber(c));