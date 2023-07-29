var merge = function(intervals) {
    let result = []
    intervals.sort((a, b) => a[0] - b[0]);
    let a =  Math.max(intervals[0][0],intervals[0][1]);
    console.log(a);
    if(intervals.length === 1){
        result.push(intervals[0])
    }
    for(let i=0;i<intervals.length-1;i++){
        console.log(intervals[i][1],intervals[i+1][0]);
        if(intervals[i][1]>=intervals[i+1][0]){
            result.push([intervals[i][0],intervals[i+1][1]])
            i++
        }else{
            console.log(intervals[i]);
            result.push([intervals[i][0],intervals[i][1]])
            result.push([intervals[i+1][0],intervals[i+1][1]])
        }
    }

    console.log(result);
    return result
};


merge([[1,4],[0,4]])