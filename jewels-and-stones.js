/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewels = J.split('');
    let stones = S.split('');
    let num = 0;
    jewels.forEach((j) => {
        num += stones.filter(s => s==j).length
    })
    return num;
};
