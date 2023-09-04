var heightChecker = function(heights) {
    let copiedArray = [...heights]
    heights.sort(function(a, b){return a-b});
    let count = 0;
    for(let i=0;i<heights.length;i++){
        if(heights[i]!=copiedArray[i]){
            count++
        }
    }
    return count
};