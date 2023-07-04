/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let count = init;
    nums.forEach(num => {
        count = fn(count, num)
    })
    return count
};