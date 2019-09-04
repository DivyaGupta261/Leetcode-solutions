/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let topSkyLine = [];
    let leftSkyLine = [];
    let sum = 0;
    for (let i=0; i<grid.length; i++) {
        leftSkyLine.push(Math.max(...grid[i]));
    }
    for (let i=0; i<grid.length; i++) {
        topSkyLine.push(0);
        for(let j=0;j <grid[i].length; j++) {
            topSkyLine[i] = grid[j][i] > topSkyLine[i] ? grid[j][i] : topSkyLine[i];
        }
    }
    for (let i=0; i<grid.length; i++) {
        for (let j =0; j<grid[i].length; j++) {
            let temp = grid[i][j];
            if (leftSkyLine[i] &&
                topSkyLine[j] &&
                grid[i][j] != leftSkyLine[i] &&
                grid[i][j] != topSkyLine[j]
               )
               grid[i][j] = Math.min(leftSkyLine[i], topSkyLine[j])
            sum += (grid[i][j] - temp)
        }
    }
    console.log(grid)
    return sum;
    
};
