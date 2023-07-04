/**
 * @return {number}
 */
var argumentsLength = function(...args) {
 let c = [];
 c.push(...args);
 return c.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */