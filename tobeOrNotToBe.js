var expect = function (val) {
    return {
        toBe: (ex) => {
            return ex === val ? true : (() => { throw new Error('Not Equal'); })();
        },
        // notToBe: (ex) => {
        //     return ex !== val ? true : (() => { throw new Error('Not Equal'); })();
        // },
        notToBe: (ex) => {
            if (ex !== val) {
                return true
            }
            else if (ex == null && val == null || ex === val) {
                return (() => { throw new Error('Equal'); })()
            }
            else {
                return (() => { throw new Error('Not Equal'); })()
            }
        }

    };
};

console.log(expect(10).notToBe(10));


// console.log(5 === null);