/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1;
    let sign = false;
    if (n < 0) {
        n = Math.abs(n);
        sign = true;
    }
    if (Math.abs(x)==1) {
        if (x==-1) return n%2 ? -1 : 1;
        return 1;
    }
    for(let i=1; i<=n; i++) {
        res *=x;
    }
    if (sign) res = 1/res;
    return res.toFixed(5);
};
