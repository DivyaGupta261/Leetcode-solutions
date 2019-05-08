/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let area = 0;
    let i =0;

    while(i<height.length) {
        if (height[i]==0) {
            i++;
            continue;
        }
        
        // let nextTallest = height.findIndex((h, hi)=>(h>height[i] && hi > i));
          let nextTallest = height
                      .slice(i, height.length)
                      .findIndex(h=>(h>height[i]));
        if (nextTallest >=0 ) {
            nextTallest += i;
        }
        if (nextTallest < 0) {
            let max = Math.max(...(height.slice(i+1, height.length)));
            nextTallest = i+1 + height.slice(i+1, height.length).indexOf(max);
            nextTallest = nextTallest >= 0 && max > 0 && nextTallest < height.length? nextTallest: -1;
        }
        if (nextTallest < 0) {
            i++;
            continue;
        }
        
        let areaTemp = (nextTallest - (i+1)) * Math.min(height[i],height[nextTallest]);

        for (j=i+1; j <nextTallest; j++) {
            areaTemp -= height[j];
        }
        i = nextTallest;
        area += areaTemp;
    }
    return area;
    
};
