var filter = function (arr, fn) {
    let empty = [];
    for (let i = 0; i <= arr.length; i++) {
        if (fn(arr[i], i) === true) {
            empty.push(arr[i])
        }
    }
    return empty
};

console.log(filter([-2, -1, 0, 1, 2], (e) => e + 1));