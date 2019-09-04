/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num < 0) {
        return;
    }
    let symbols = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
        5000: '*'
    };
    let numStr = num.toString();
    let roman = '';
    while (num > 0) {
        let nS = numStr.slice(0, 1);
        numStr = numStr.slice(1, numStr.length);
        
        let baseN = parseInt(nS);
        let tens = Math.pow(10, numStr.length);
        let n = baseN * tens;
        
        num = parseInt(numStr);
        
        if (symbols[n]) {
            roman += symbols[n];
            continue;
        }
        
        let symbol = '';
        
        switch(baseN) {

            case 2:
                if (tens == 1000) {
                    symbol = Array.apply(null, {length: baseN}).map(()=> 'M').join('');
                }
                if (tens == 100) {
                    symbol = 'CC';
                }
                if (tens == 10) {
                    symbol = 'XX';
                }
                if (tens == 1) {
                    symbol = 'II';
                }
                break;
                
            case 3:
                if (tens == 1000) {
                    symbol = Array.apply(null, {length: baseN}).map(()=> 'M').join('');
                }
                if (tens == 100) {
                    symbol = 'CCC';
                }
                if (tens == 10) {
                    symbol = 'XXX';
                }
                if (tens == 1) {
                    symbol = 'III';
                }
                break;
                
            case 4:
                if (tens == 1000) {
                    symbol = 'M*';
                }
                if (tens == 100) {
                    symbol = 'CD';
                }
                if (tens == 10) {
                    symbol = 'XL';
                }
                if (tens == 1) {
                    symbol = 'IV';
                }
                break;
           
            case 6:
                if (tens == 1000) {
                    symbol = 'M*';
                }
                if (tens == 100) {
                    symbol = 'DC';
                }
                if (tens == 10) {
                    symbol = 'LX';
                }
                if (tens == 1) {
                    symbol = 'VI';
                }
                break;
                
            case 7:
                if (tens == 1000) {
                    symbol = 'M*';
                }
                if (tens == 100) {
                    symbol = 'DCC';
                }
                if (tens == 10) {
                    symbol = 'LXX';
                }
                if (tens == 1) {
                    symbol = 'VII';
                }
                break;
                
            case 8:
                if (tens == 1000) {
                    symbol = 'M*';
                }
                if (tens == 100) {
                    symbol = 'DCCC';
                }
                if (tens == 10) {
                    symbol = 'LXXX';
                }
                if (tens == 1) {
                    symbol = 'VIII';
                }
                break;
                
            case 9:
                if (tens == 1000) {
                    symbol = 'M*'
                }
                if (tens == 100) {
                    if (roman == 'M*') roman = '';
                    symbol = 'CM';
                }
                if (tens == 10) {
                    symbol = 'XC';
                }
                if (tens == 1) {
                    symbol = 'IX';
                }
                break;
                
            case 0:
        }
        
        roman += symbol;
        
        
    }
    
    return roman;
    
    
    
};
