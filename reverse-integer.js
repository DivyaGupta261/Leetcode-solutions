/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0;
    let negative = false;
    if (x<0) {
        negative= true;
        x = x*-1;
    }
    num = (num * 10) + (x%10);
    x = Math.floor(x/10);
    
    while(x!=0) {
        num = (num * 10) + (x%10);
        x = Math.floor(x/10);
    }
    return num > Math.pow(2,31) - 1 ? 0 : negative ? -num : num;
};
