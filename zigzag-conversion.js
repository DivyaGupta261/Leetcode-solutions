/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let strings = {};
    let i = 0;
    let forward = true;
    while(s.length) {
        if (!strings[i]) {
            strings[i] = '';
        }
        strings[i] += s.slice(0, 1);
        s = s.slice(1);
        
        if ( i < numRows-1 && forward) {
            i++;
            continue;
        } else if (!forward && i > 0) {
            i--;
            continue;
        } else if (!forward) {
            i++;
            forward = true;
            continue;
        } else if (i>0){
            forward = false;
            i--;
            continue;
        }
    }
    let finalString = Object.keys(strings).reduce((final, i) => {
        final += strings[i];
        return final;
    }, '');
    return finalString;
    
};
