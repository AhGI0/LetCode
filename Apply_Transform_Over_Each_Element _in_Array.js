// i will use map but in the same time i will not use map

let Map = (arr, fun) => {
    let result = [];
    for (let inner of arr) {
        result.push(fun(inner))
    }
    return result
}

console.log(Map([1, 2], (i, y) => i + 2));

