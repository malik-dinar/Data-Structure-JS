var replaceElements = function(arr) {
    for(let i=0;i<arr.length-1;i++){
        let flag = 0
        let largest = arr[i+1]
        console.log(i,largest);
        for(let j=i+2; j<arr.length; j++){
            if(largest < arr[j]){
                flag = 1
                largest = arr[j]
            }
        }
        console.log(largest);
        arr[i] = largest
        if(flag = 0){
            arr[i] = -1
        }
    }

    arr[arr.length-1] = -1
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));

// [18,6,6,6,1,-1]
